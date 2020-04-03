import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { CasaDoPobreService } from 'src/app/services/casa-do-pobre.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  eventos:Evento[] = []
  usuario = new Usuario();
  constructor(private casaDoPobreSrv:CasaDoPobreService, private alertCtrl:AlertController, private usuarioSrv:UsuariosService,
              private toastCtrl:ToastController, private loadingController: LoadingController) { }

  async ngOnInit() {
    await this.usuarioSrv.initialize();
    this.usuario = this.usuarioSrv.usuarioLogado;
  }
  
  async ionViewWillEnter() {
    this.eventos = await this.casaDoPobreSrv.eventos();
  }

  /** Exibie informações do calendário */
  exibirObservacao(evento: Evento) {

    const opc: any = ['Ok'];
    if (evento.autor.id == this.usuario.id)
      opc.push({text:'Excluir', handler:async() => {
        const load = await this.loadingController.create({spinner:'circles', message: 'Excluindo'});
        load.present();
        await this.casaDoPobreSrv.excluirEvento(evento.id);
        this.eventos = await this.casaDoPobreSrv.eventos();
        load.dismiss()
        this.toastCtrl.create({message:'Evento removido', duration: 3000}).then(t => t.present())
      }});


    this.alertCtrl.create({
      header: evento.descricao,
      subHeader: evento.autor.nome,
      message: evento.observacao,
      buttons:opc
    }).then(a => a.present())
  }

}
