import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { NavExtrasService } from 'src/app/services/nav-extras.service';

@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.page.html',
  styleUrls: ['./prontuarios.page.scss'],
})
export class ProntuariosPage implements OnInit {

  paciente: Paciente = null
  constructor(private navExtra:NavExtrasService) { }

  ngOnInit() {
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
  }

}
