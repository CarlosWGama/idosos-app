import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { Paciente } from '../../../../../models/paciente';
import { Profissao } from '../../../../../models/profissao';
import { Usuario } from '../../../../../models/usuario';
import { EducacaoFisicaExtraService } from '../../../../../services/educacao-fisica-extra.service';
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
  acompanhamentos: any[] = [];
  usuario: Usuario = new Usuario();
  @ViewChild('ionItemSliding', {static: false})
  ionItemSliding: IonItemSliding;
  podeAprovar = false;
  maisAcompanhamentos = true;

  inicio = 0;
  limite = 10;

  constructor(private router:Router,
             private navExtra:NavExtrasService, 
             private educacaoFisicaSrv:EducacaoFisicaExtraService,
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
    console.log(this.acompanhamentos);
  }

  /** Busca mais evoluções */
  async buscarMais() {
    const loading = await this.loadingController.create({message: 'Buscando', backdropDismiss: false});
    loading.present();
    const novas = await this.educacaoFisicaSrv.acompanhamentos(this.paciente.id, this.inicio, this.limite)
    loading.dismiss();
    
    //Pode ter mais evoluções
    this.maisAcompanhamentos = novas.length == this.limite;

    //Encontrou mais evoluções
    if (novas.length > 0) {
      this.inicio += this.limite;
      this.acompanhamentos = this.acompanhamentos.concat(novas);
    } else {
      const toast = await this.toastController.create({message: 'Não há mais testes de acompanhamentos', duration: 2000});
      toast.present();
    }
  }

  /** Adiciona uma nova evolução */
  nova() {
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/acompanhamento`);
  }
  
  /** Abre uma evoluação */
  abrirAcompanhamento(acompanhamento) {
    this.navExtra.set('acompanhamento', acompanhamento);
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/acompanhamento`);
  }

  /** Aprova uma evolução */
  async aprovar(prontuario) {
    this.alertController.create({
      header: 'Aprovar prontuário #'+prontuario.id,
      message: 'Deseja aprovar esse prontuário?',
      buttons: [
        'Cancelar',
        {text:'Confirmar', handler: async() => {
          const resultado = await this.educacaoFisicaSrv.aprovaAcompanhamento(prontuario.id);
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
