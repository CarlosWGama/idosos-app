import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { ToastController } from '@ionic/angular';
import { NavExtrasService } from 'src/app/services/nav-extras.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: Usuario = new Usuario();
  totalAvisos = 0;
  constructor(private usuarioSrv:UsuariosService, private router:Router, private notificacoesSrv:NotificacaoService, 
    private toastCtrl:ToastController, private navExtra:NavExtrasService) {}

  async ngOnInit() {
    await this.usuarioSrv.initialize();
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  async ionViewWillEnter() {
    
    if (this.navExtra.get('atualizarLogin', false)) {
      await this.usuarioSrv.initialize();
      this.usuario = this.usuarioSrv.usuarioLogado;
    }
    this.totalAvisos = await this.notificacoesSrv.getTotalNaoLidas();
  }

  /** Realiza a navegação entre as páginas */
  navegar(url:string) {
    this.router.navigateByUrl(url);
  }

  /** Exibe a mensagem que o recurso ainda não está desenvolvimento */
  recursosIndisponivel() {
    this.toastCtrl.create({
      message: 'Esse recurso ainda está em desenvolvimento',
      duration: 3000
    }).then(t => t.present())
  }
  
  /** Função responsável por deslogar o usuário */
  sair() {
    this.usuarioSrv.deslogar()
    this.router.navigateByUrl('login')
  }

}
