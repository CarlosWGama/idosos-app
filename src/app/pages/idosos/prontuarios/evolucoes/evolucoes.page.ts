import { Component, OnInit, ViewChild } from '@angular/core';
import { Profissao } from 'src/app/models/profissao';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { ProntuariosService } from 'src/app/services/prontuarios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastController, AlertController, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-evolucoes',
  templateUrl: './evolucoes.page.html',
  styleUrls: ['./evolucoes.page.scss'],
})
export class EvolucoesPage implements OnInit {

  area: Profissao;
  evolucoes: any[] = [];
  usuario: Usuario = new Usuario();
  @ViewChild('ionItemSliding', {static: false})
  ionItemSliding: IonItemSliding;

  constructor(private router:Router,
             private navExtra:NavExtrasService, 
             private prontuarioSrv:ProntuariosService,
             private usuarioSrv: UsuariosService, 
             private toastController: ToastController,
             private alertController: AlertController) { }

  async ngOnInit() {
    this.area = this.navExtra.get('area', new Profissao(1, 'Nutrição', 'nutricao'), false);
    
    this.usuario = this.usuarioSrv.usuarioLogado;
    await this.usuarioSrv.initialize();
  }
  
  async ionViewDidEnter() {
    this.evolucoes = await this.prontuarioSrv.evolucoes(this.area.url);
    console.log(this.evolucoes);
  }
  
  /** Abre uma evoluação */
  abrirEvolucao(prontuario) {
    this.navExtra.set('prontuario', prontuario);
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/ficha`);
  }

  /** Aprova uma evolução */
  async aprovar(prontuario) {
    this.alertController.create({
      header: 'Aprovar prontuário #'+prontuario.id,
      message: 'Deseja aprovar esse prontuário?',
      buttons: [
        'Cancelar',
        {text:'Confirmar', handler: () => {
          this.prontuarioSrv.aprovaEvolucao(this.area.url, prontuario.id).then(t => {
            prontuario.aprovado = true;
            this.toastController.create({message:'Operação realizada com sucesso', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          }).catch(erro => {
            this.toastController.create({message:'Não foi possível completar a ação', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          })
        }}
      ]     
    }).then(a => a.present())
  }
 
}
