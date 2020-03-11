import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento';
import { CasaDoPobreService } from 'src/app/services/casa-do-pobre.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  eventos:Evento[] = []
  constructor(private casaDoPobreSrv:CasaDoPobreService, private alertCtrl:AlertController) { }

  async ngOnInit() {
    this.eventos = await this.casaDoPobreSrv.eventos();
  }

  /** Exibie informações do calendário */
  exibirObservacao(evento: Evento) {
    this.alertCtrl.create({
      header: evento.descricao,
      message: evento.observacao,
      buttons:['Ok']
    }).then(a => a.present())
  }

}
