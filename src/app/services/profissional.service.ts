import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService extends ApiService {

  /** Retorna a equipe profissional da casa do pobre */
  public async getEquipeProfissional(): Promise<Usuario[]> {
      return this.get('/casa/equipe').then(resposta => {
        const equipe: Usuario[] = [];

        resposta.equipe.forEach(usuario => {
          equipe.push(Object.assign(new Usuario, usuario))
        });

        return equipe;
      })
  }
}
