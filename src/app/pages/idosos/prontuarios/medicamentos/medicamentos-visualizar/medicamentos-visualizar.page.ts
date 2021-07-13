import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/models/medicamento';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { AlertController } from '@ionic/angular';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-medicamentos-visualizar',
  templateUrl: './medicamentos-visualizar.page.html',
  styleUrls: ['./medicamentos-visualizar.page.scss'],
})
export class MedicamentosVisualizarPage implements OnInit {

  medicamentos: Medicamento[] = [];
  constructor(private navExtra:NavExtrasService, private alertController: AlertController,
            private medicamentosSrv:MedicamentosService) { }

  async ngOnInit() { }
  
  async ionViewDidEnter() {
    const paciente = this.navExtra.get('paciente', new Paciente(1), false);
    this.medicamentos = await this.medicamentosSrv.buscarAtivos(paciente.id, 0);
  }

  /** Cria um novo medicamento */
  visualizar(medicamento: Medicamento) {
    let msg = `
      <b>Medicamento:</b> ${medicamento.descricao} <br/>
      <b>Tipo:</b> ${(medicamento.tipo == 1 ? 'Continuo' : 'Com duração')} <br/>
      <b>Posologia:</b> ${(medicamento.posologia)} <br/>
      <b>Observação:</b> ${(medicamento.observacao)} 
    `;
    if (medicamento.tipo == 2)
      msg += '<br/><b>Duração:</b> ' + medicamento.duracao


    this.alertController.create({
      header: medicamento.descricao,
      message: msg,
      buttons: ['Ok']
    }).then(a => a.present())
  }
}
