import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Contato } from '../models/Contato';

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

  public async contatos(): Promise<Contato[]> {
    return new Promise(resolve => {
      resolve([
        new Contato(0, 'Telefone Central', '9999-9999'),
        new Contato(0, 'Email', 'contato@casadopobre.com.br'),
        new Contato(0, 'Diretoria', '8888-8888')
      ])
    })
  }
}
