import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessorGuard implements CanActivate {
  constructor(private usuarioSrv:UsuariosService, private router:Router) { }
  
  /** Bloquea o acesso do usuário se ele não for professor */
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const permitido = this.usuarioSrv.usuarioLogado != null && this.usuarioSrv.usuarioLogado.nivel_acesso == 1;
    if (!permitido)
      this.router.navigateByUrl('/home');
    return permitido;
    //return true;
  }
  
}
