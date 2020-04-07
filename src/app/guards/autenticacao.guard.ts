import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(private usuarioSrv:UsuariosService, private router:Router) { }
  
  /** Bloquea o acesso do usuário se ele não tiver logado */
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    const permitido = this.usuarioSrv.usuarioLogado != null;
    if (!permitido)
      this.router.navigateByUrl('/inicial');
    return permitido;
  }
  
}
