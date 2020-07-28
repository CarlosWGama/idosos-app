import { Component, OnInit, ViewChild } from '@angular/core';
import { Profissao } from 'src/app/models/profissao';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { ProntuariosService } from 'src/app/services/prontuarios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastController, AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { Paciente } from '../../../../models/paciente';

@Component({
  selector: 'app-evolucoes',
  templateUrl: './evolucoes.page.html',
  styleUrls: ['./evolucoes.page.scss'],
})
export class EvolucoesPage implements OnInit {

  area: Profissao;
  paciente: Paciente;
  podeAdicionar: boolean;
  evolucoes: any[] = [];
  usuario: Usuario = new Usuario();
  @ViewChild('ionItemSliding', {static: false})
  ionItemSliding: IonItemSliding;
  podeAprovar = false;
  maisEvolucoes = true;

  inicio = 0;
  limite = 10;

  constructor(private router:Router,
             private navExtra:NavExtrasService, 
             private prontuarioSrv:ProntuariosService,
             private usuarioSrv: UsuariosService, 
             private toastController: ToastController,
             private loadingController: LoadingController,
             private alertController: AlertController) { }

  async ngOnInit() {
    this.area = this.navExtra.get('area', new Profissao(2, 'Nutrição', 'nutricao'), false);
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.podeAprovar = (this.usuario.nivel_acesso == 1 && this.usuario.profissao_id == this.area.id); //Só o professor da area pode aprovar
    this.podeAdicionar = (this.usuario.profissao_id == this.area.id); //Apenas profissionais da area podem adicionar novas evoluções 
  }
  
  async ionViewDidEnter() {
    this.buscarMais();
    console.log(this.evolucoes);
  }

  /** Busca mais evoluções */
  async buscarMais() {
    const loading = await this.loadingController.create({message: 'Buscando', backdropDismiss: false});
    loading.present();
    const novas = await this.prontuarioSrv.evolucoes(this.area.url, this.paciente.id, this.inicio, this.limite)
    loading.dismiss();
    
    //Pode ter mais evoluções
    this.maisEvolucoes = novas.length == this.limite;

    //Encontrou mais evoluções
    if (novas.length > 0) {
      this.inicio += this.limite;
      this.evolucoes = this.evolucoes.concat(novas);
    } else {
      const toast = await this.toastController.create({message: 'Não há mais evoluções', duration: 2000});
      toast.present();
    }
  }

  /** Adiciona uma nova evolução */
  nova() {
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/evolucao`);
  }
  
  /** Abre uma evoluação */
  abrirEvolucao(evolucao) {
    this.navExtra.set('evolucao', evolucao);
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/evolucao`);
  }

  /** Aprova uma evolução */
  async aprovar(prontuario) {
    this.alertController.create({
      header: 'Aprovar prontuário #'+prontuario.id,
      message: 'Deseja aprovar esse prontuário?',
      buttons: [
        'Cancelar',
        {text:'Confirmar', handler: async() => {
          const resultado = await this.prontuarioSrv.aprovaEvolucao(this.area.url, prontuario.id);
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
