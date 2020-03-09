import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-idosos',
  templateUrl: './idosos.page.html',
  styleUrls: ['./idosos.page.scss'],
})
export class IdososPage implements OnInit {

  titulo = '';
  icone = '';
  idosos: Paciente[] = []
  constructor(private router:Router, private pacienteSrv:PacientesService) { }

  ngOnInit() {
  }
  
  async ionViewWillEnter() {
    const genero = (this.router.url == '/idosos' ? 1 : 0);
    this.titulo = (genero == 1? 'Idosos': 'Idosas');
    this.icone = (genero == 1? 'male': 'female');
    this.idosos = await this.pacienteSrv.getPacientes(genero);
  }

}
