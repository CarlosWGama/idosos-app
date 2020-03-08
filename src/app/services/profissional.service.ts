import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Profissional } from '../models/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService extends ApiService {

  /** Retorna os profissionais da casa do pobre */
  public async getProfissionais(): Promise<Profissional[]> {
    return new Promise(resolve => {
      resolve([
        new Profissional(1, 'Carlos Alberto Correia Lessa Filho', 'Enfermeiro'),
        new Profissional(2, 'João da Cunha', 'Educador Físico'),
        new Profissional(3, 'Maria Barbosa', 'Nutricionista'),
        new Profissional(4, 'Matheus Jones da Silva', 'Psicologo'),
        new Profissional(1, 'Carlos Alberto Correia Lessa Filho', 'Enfermeiro'),
        new Profissional(2, 'João da Cunha', 'Educador Físico'),
        new Profissional(3, 'Maria Barbosa', 'Nutricionista'),
        new Profissional(4, 'Matheus Jones da Silva', 'Psicologo'),
        new Profissional(1, 'Carlos Alberto Correia Lessa Filho', 'Enfermeiro'),
        new Profissional(2, 'João da Cunha', 'Educador Físico'),
        new Profissional(3, 'Maria Barbosa', 'Nutricionista'),
        new Profissional(4, 'Matheus Jones da Silva', 'Psicologo'),
      ])

    })

  }
}
