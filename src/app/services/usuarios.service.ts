import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * 
 */
export class UsuariosService {

  constructor() { }


  /**
   * Realiza o login do usuário
   * @param codigo 
   * @param senha 
   */
  async logar(codigo:number, senha: string): Promise<{sucesso:boolean, error?:string}> {
    return new Promise(resolve => {

      if (codigo == 1 && senha == '123456') resolve({sucesso: true})
      else resolve({sucesso: false, error: 'Login ou senha incorreta'})
    })
  }
}
