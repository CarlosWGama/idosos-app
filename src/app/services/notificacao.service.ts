import { Injectable } from '@angular/core';
import { Notificacao } from '../models/notificacao';
import { ApiService } from './api.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService extends ApiService {


  /**
   * Envia uma nova notificação para o servidor
   * @param dados -> Dados da notificação
   */
  public async notificar(dados): Promise<{sucesso:boolean, error?: string}> {
    return this.post('/notificacoes', {dados}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Recupera as mensagens que o Profissional ainda não leu */
  public async getTotalNaoLidas(): Promise<number> {
    return this.get('/notificacoes/nao-lidas', true)
      .then(resposta => resposta.total)
      .catch(erro => 0)
  }

  /** Recupera as notificacoes */
  public async getNotificacoes(): Promise<Notificacao[]> {
    return this.get('/notificacoes', true)
      .then(resposta => {
        const notificacoes: Notificacao[] = [];

        resposta.notificacoes.forEach(not => {
          const paciente = not.notificacao.paciente;
          const autor = not.notificacao.autor;
          const notID = not.notificacao_id;
          const titulo = `Notificação - ${paciente.nome}`;
          notificacoes.push(new Notificacao(notID, titulo, not.notificacao.descricao, autor, not.lido, not.notificacao.data_cadastro))
        })
        return notificacoes;
      })
      .catch(erro => [])
  }

  /** Lê uma notificação */
  public ler(notificacaoID: number) {
    return this.put(`/notificacoes/${notificacaoID}`, null, true);
  }

  /** Lê uma notificação */
  public excluir(notificacaoID: number) {
    return this.delete(`/notificacoes/${notificacaoID}`, true);
  }
}
