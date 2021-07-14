import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { Paciente } from '../../../../../models/paciente';
import { Profissao } from '../../../../../models/profissao';
import { Usuario } from '../../../../../models/usuario';
import { EnfermagemExtraService } from '../../../../../services/enfermagem-extra.service';
import { NavExtrasService } from '../../../../../services/nav-extras.service';
import { UsuariosService } from '../../../../../services/usuarios.service';

@Component({
  selector: 'app-consulta-clinica-lista',
  templateUrl: './consulta-clinica-lista.page.html',
  styleUrls: ['./consulta-clinica-lista.page.scss'],
})
export class ConsultaClinicaListaPage implements OnInit {

  area: Profissao;
  paciente: Paciente;
  podeAdicionar: boolean;
  consultas: any[] = [];
  usuario: Usuario = new Usuario();
  @ViewChild('ionItemSliding', {static: false})
  ionItemSliding: IonItemSliding;
  podeAprovar = false;
  maisConsultas = true;

  inicio = 0;
  limite = 10;

  constructor(private router:Router,
             private navExtra:NavExtrasService, 
             private enfermagemSrv:EnfermagemExtraService,
             private usuarioSrv: UsuariosService, 
             private toastController: ToastController,
             private loadingController: LoadingController,
             private alertController: AlertController) { }

  async ngOnInit() {
    this.area = this.navExtra.get('area', new Profissao(6, 'Enfermagem', 'enfermagem'), false);
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.podeAprovar = (this.usuario.nivel_acesso == 1 && this.usuario.profissao_id == this.area.id); //Só o professor da area pode aprovar
    this.podeAdicionar = (this.usuario.profissao_id == this.area.id); //Apenas profissionais da area podem adicionar novas evoluções 
  }
  
  async ionViewDidEnter() {
    this.buscarMais();
    console.log(this.consultas);
  }

  /** Busca mais consultas */
  async buscarMais() {
    const loading = await this.loadingController.create({message: 'Buscando', backdropDismiss: false});
    loading.present();
    const novas = await this.enfermagemSrv.consultas(this.paciente.id, this.inicio, this.limite)
    loading.dismiss();
    
    //Pode ter mais consultas
    this.maisConsultas = novas.length == this.limite;

    //Encontrou mais consultas
    if (novas.length > 0) {
      this.inicio += this.limite;
      this.consultas = this.consultas.concat(novas);
    } else {
      const toast = await this.toastController.create({message: 'Não há mais consultas', duration: 2000});
      toast.present();
    }
  }

  /** Adiciona uma nova consulta */
  nova() {
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/consulta-clinica`);
  }
  
  /** Abre uma evoluação */
  abrirConsulta(consulta) {
    this.navExtra.set('consulta', consulta);
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/consulta-clinica`);
  }

  /** Aprova uma evolução */
  async aprovar(prontuario) {
    this.alertController.create({
      header: 'Aprovar consulta clínica #'+prontuario.id,
      message: 'Deseja aprovar essa consulta?',
      buttons: [
        'Cancelar',
        {text:'Confirmar', handler: async() => {
          const resultado = await this.enfermagemSrv.aprovaConsulta(prontuario.id);
          if (resultado.sucesso) {
            prontuario.aprovado = true;
            this.toastController.create({message:'Operação realizada com sucesso', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          } else {
            this.toastController.create({message:'Não foi possível completar a ação', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          }
        }}
      ]     
    }).then(a => a.present())
  }

}
