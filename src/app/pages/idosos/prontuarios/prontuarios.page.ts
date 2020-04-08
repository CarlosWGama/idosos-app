import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Profissao } from 'src/app/models/Profissao';

@Component({
  selector: 'app-prontuarios',
  templateUrl: './prontuarios.page.html',
  styleUrls: ['./prontuarios.page.scss'],
})
export class ProntuariosPage implements OnInit {

  paciente: Paciente = null;

  areas: Profissao[] = [
    new Profissao(1, 'Nutrição'),
    new Profissao(2, 'Odontologia'),
  ]

  constructor(private navExtra:NavExtrasService, private router:Router, private usuarioSrv: UsuariosService) { }

  async ngOnInit() {
    //Usa esse default para teste
    this.paciente = this.navExtra.get('paciente', new Paciente(1, 'Carlos', '1950-01-01', 1, '...', 1, false, 1, 1, '2019-01-01', 1), false);
    await this.usuarioSrv.initialize();
  }

  navegar(url: string) {
    this.navExtra.set('paciente', this.paciente);
    this.router.navigateByUrl(url);
  }

  abrirArea(area: Profissao) {
    this.navExtra.set('paciente', this.paciente);
    this.navExtra.set('area', area);
    this.router.navigateByUrl('/prontuarios/selecao-area')
  }

}
