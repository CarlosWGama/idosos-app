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
    return new Promise(resolve => {

      if (codigo == 1 && senha == '123456') {
        let usuario = Object.assign(new Usuario, {nome:'Carlos'})
        this.storage.set('usuario', usuario);
        // this.setJWT(resposta.jwt);
        this._usuarioLogado = usuario;

        resolve({sucesso: true})
      } else resolve({sucesso: false, error: 'Login ou senha incorreta'})
    })
  }

  /** Desloga o usuário */
  public deslogar() {
    this._usuarioLogado = null;
    this.storage.remove('usuario')
  }
}
