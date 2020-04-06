import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
/**
 * Tela de login do Aplicativo 
 */
export class LoginPage  {

  //Dados de acesso do usuário
  login: {codigo: number, senha: string} = { codigo: null, senha: null }

  constructor(private usuarioSrv: UsuariosService, private toastCtrl:ToastController, 
              private router:Router, private navExtra:NavExtrasService, private loadCtrl:LoadingController) { }

  /** Comando para realizar o login do usuário */
  async logar() {
    const load = await this.loadCtrl.create({spinner: 'circles', message: 'Aguarde', backdropDismiss: false })
    load.present();
    const resposta = await this.usuarioSrv.logar(this.login.codigo, this.login.senha)
    load.dismiss()
    if (resposta.sucesso) {
      this.navExtra.set('atualizarLogin', true);
      this.router.navigateByUrl('home')
    } else {
      this.toastCtrl.create({message:'Login ou senha incorreta', duration: 3000})
        .then(t => t.present())
    }
  }

}
