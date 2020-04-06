import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/paciente';
import { PacientesService } from 'src/app/services/pacientes.service';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-idosos',
  templateUrl: './idosos.page.html',
  styleUrls: ['./idosos.page.scss'],
})
export class IdososPage implements OnInit {

  titulo = '';
  icone = '';
  idosos: Paciente[] = []
  usuario: Usuario = new Usuario;
  constructor(private router:Router, private pacienteSrv:PacientesService, private navExtra:NavExtrasService, private usuarioSrv: UsuariosService) { }

  async ngOnInit() {
    await this.usuarioSrv.initialize();
    this.usuario = this.usuarioSrv.usuarioLogado;
  }
  
  async ionViewWillEnter() {
    const genero = (this.router.url == '/idosos' ? 1 : 0);
    this.titulo = (genero == 1? 'Idosos': 'Idosas');
    this.icone = (genero == 1? 'male': 'female');
    this.idosos = await this.pacienteSrv.getPacientes(genero);
  }

  /** Confirma se o idoso que quer visualizar */
  selecionaIdoso(idoso:Paciente) {
    this.navExtra.set('paciente', idoso);
    this.router.navigateByUrl('/idosos/selecionar-idoso');
  }

}
