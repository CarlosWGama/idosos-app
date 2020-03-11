import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Contato } from '../models/Contato';
import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class CasaDoPobreService extends ApiService {

  /** Retorna uma String com o histórico da Casa do Pobre */
  public async historico(): Promise<string> {
    return new Promise(resolve => {
      resolve('\
      <h1>Início</h1>\
      <p>Fundada em 1995...</p>\
      <p>Atuamente conta com x profissioanis...</p>\
      <p>Possuímos y idosos...</p>\
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis sollicitudin metus, ac dapibus est commodo eget. Sed a convallis ipsum. In hac habitasse platea dictumst. Donec at metus ut magna fermentum tristique. Duis aliquam lorem in vestibulum gravida. Cras ligula risus, lacinia mattis pulvinar id, vestibulum sit amet nibh. Sed vel tincidunt nibh, sed dignissim massa. Phasellus hendrerit magna ut nibh hendrerit, vel iaculis enim dapibus. Nam aliquam in lectus eu molestie.</p>\
      ')
    })
  }

  /** Retorna os contatos da casa do pobre */
  public async contatos(): Promise<Contato[]> {
    return new Promise(resolve => {
      resolve([
        new Contato(0, 'Telefone Central', '9999-9999'),
        new Contato(0, 'Email', 'contato@casadopobre.com.br'),
        new Contato(0, 'Diretoria', '8888-8888')
      ])
    })
  }

  /** Retorna os eventos do calendário */
  public async eventos(): Promise<Evento[]> {
    return new Promise(resolve => {
      resolve([
        new Evento(1, 'Reunião com os médicos', '2020-05-11', 'Reunião com todos os médicos na sala da diretoria'),
        new Evento(2, 'Visita de colégio', '2020-06-15', 'O colégio SST irá levar alguns alunos para realizar uma visita a casa do pobre'),
        new Evento(3, 'Mutirão', '2020-07-09', 'Será realizado um mutirão com os idosos envolvendo todos os médicos'),
        new Evento(4, 'Confraternização', '2020-12-10', 'Confratenização na pizzaria piratas.'),
      ])
    }) 
  }
}
