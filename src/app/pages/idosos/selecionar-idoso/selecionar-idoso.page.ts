import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Paciente } from 'src/app/models/paciente';
import * as moment from 'moment';

@Component({
  selector: 'app-selecionar-idoso',
  templateUrl: './selecionar-idoso.page.html',
  styleUrls: ['./selecionar-idoso.page.scss'],
})
export class SelecionarIdosoPage implements OnInit {

  idoso:Paciente;
  anos:number = null;
  constructor(private router:Router, private navExtra:NavExtrasService) { }

  ngOnInit() {
    this.idoso = this.navExtra.get('paciente', new Paciente(), false);
  }
}
