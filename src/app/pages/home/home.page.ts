import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: Usuario = new Usuario();
  
  constructor(private usuarioSrv:UsuariosService, private router:Router) {}

  ngOnInit(): void {
    this.usuario = this.usuarioSrv.usuarioLogado;
  }
  
  /** Função responsável por deslogar o usuário */
  sair() {
    this.usuarioSrv.deslogar()
    this.router.navigateByUrl('login')
  }

}
