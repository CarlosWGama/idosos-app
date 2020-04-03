import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
/**
 * 
 */
export class UsuariosService extends ApiService {

  private _usuarioLogado: Usuario = null
  get usuarioLogado(): Usuario {
    return this._usuarioLogado;
  }
    
  async initialize() {
    this._usuarioLogado = await this.storage.get('usuario');
  }


  /**
   * Realiza o login do usuário
   * @param codigo 
   * @param senha 
   */
  async logar(codigo:number, senha: string): Promise<{sucesso:boolean, error?:string}> {
    return this.post('/login', {codigo, senha}).then(resposta => {

      const usuario = Object.assign(new Usuario, resposta.usuario);
      this.storage.set('usuario', usuario);
      this._usuarioLogado = usuario;
      this.setJWT(resposta.jwt);

      return {sucesso: true};
    }).catch(erro => {
      return {sucesso: false, error: 'Login ou senha incorreta'}
    })
  }

  /** Desloga o usuário */
  public deslogar() {
    this._usuarioLogado = null;
    this.storage.remove('usuario')
  }
}
