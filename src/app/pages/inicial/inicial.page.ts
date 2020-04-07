import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(private router:Router, private usuariosSrv:UsuariosService) { }

  async ngOnInit() {
    await this.usuariosSrv.initialize();
    if (this.usuariosSrv.usuarioLogado != null) 
      this.router.navigateByUrl('/home')
    else
      this.router.navigateByUrl('/login') 
  }

}
