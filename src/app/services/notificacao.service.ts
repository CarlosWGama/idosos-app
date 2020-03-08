import { Injectable } from '@angular/core';
import { Notificacao } from '../models/notificacao';
import { ApiService } from './api.service';
import { Profissional } from '../models/profissional';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService extends ApiService {

  /** Recupera as mensagens que o Profissional ainda não leu */
  public async getTotalNaoLidas(): Promise<number> {
    return new Promise(resolve => resolve(2))
  }

  /** Recupera as notificacoes */
  public async getNotificacoes(): Promise<Notificacao[]> {
    return new Promise(resolve => {
      resolve([
        new Notificacao(0, 'Alteração no Paciente João', 'O paciente sofreu um problema x', new Usuario(0, 'João'), true, '2020-03-08'),
        new Notificacao(0, 'Alteração no Paciente João', 'O paciente melhorou do sintoma y', new Usuario(0, 'João'), false, '2020-03-08'),
        new Notificacao(0, 'Alteração no Paciente João', '', new Usuario(0, 'João'), false, '2020-02-25'),
        new Notificacao(0, 'Alteração no Paciente João', 'Alteração na alimentação', new Usuario(0, 'João'), false, '2020-02-08'),
        new Notificacao(0, 'Alteração no Paciente João', '', new Usuario(0, 'João'), true, '2020-03-10'),
      ])
    })
  }

  /** Lê uma notificação */
  public ler(notificacaoID: number) {

  }

  /** Lê uma notificação */
  public excluir(notificacaoID: number) {
    
  }
}
