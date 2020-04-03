import { Component, OnInit } from '@angular/core';
import { Notificacao } from 'src/app/models/notificacao';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
})
export class NotificacoesPage implements OnInit {

  notificacoes: Notificacao[] = []

  constructor(private notificacaoSrv:NotificacaoService, private alertCtrl:AlertController, private toastCtrl:ToastController) { }

  async ngOnInit() {
    this.notificacoes = await this.notificacaoSrv.getNotificacoes();
  }

  /** Visualiza uma notificação  */
  public abrirNotificacao(notificacao:Notificacao) {
    this.alertCtrl.create({
      header: notificacao.titulo,
      message:`Autor: ${notificacao.autor.nome} <br/> Observação: ${notificacao.observacao}`,
      buttons: ['OK']
    }).then(a => a.present())

    this.notificacaoSrv.ler(notificacao.id);
  }

  /** Remove uma notificação */
  public async excluir(notificacao: Notificacao) {
    this.toastCtrl.create({message:'Notificação removida', duration: 2000}).then(t => t.present());
    this.notificacaoSrv.excluir(notificacao.id);
    this.notificacoes = await this.notificacaoSrv.getNotificacoes();

  }

}
