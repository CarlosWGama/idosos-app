import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProntuariosService extends ApiService {


  // ============================ FICHA ======================================= //
  /**
   * Recupera a ultima evolução aprovada para Ficha de Avaliação do paciente
   * @param url -> Url base que será usada para o servidor
   * @param pacienteID -> ID do paciente que que será recuparada a ficha.
   */
  public async fichaAvaliacao(url: string, pacienteID: number): Promise<any> {
    return this.get(`/prontuarios/${url}/ficha/${pacienteID}`, true).then(resposta => {
      return resposta.prontuario;
    }).catch(erro => {
      console.log(erro);
      return {id: null}
    });
  }

  /**
   * Cadastra uma nova ficha para evolução
   * @param dados -> São os dados que serão enviados
   * @param url -> Url base que será usada para o servidor
   */
  public async salvarFicha(dados: any, url: string): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${url}/ficha`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
        console.log(erro);
        console.log(erro.error);
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  // ============================ EVOLUÇÕES ======================================= //
  /**
   * Recupera as evoluções
   * @param url -> Url base que será usada para o servidor
   * @param pacienteID -> De qual paciente deve buscar as evoluções
   * @param inicio -> Começando em qual valor (paginação)
   * @param limite -> Quantos valores deve retornar
   */
  public async evolucoes(url: string, pacienteID: number, inicio: number = 0, limite: number = 10): Promise<any[]> {
    return this.get(`/prontuarios/${url}/evolucao/${pacienteID}/${inicio}/${limite}`, true).then(resposta => {
      return resposta.evolucoes;
    }).catch(erro => []);
  }

  /** Cadastra Evolução
   * @param dados -> Dados da Evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   */
  public async cadastrarEvolucao(dados: any, url: string): Promise<{sucesso:boolean, error?:string}> {
    return this.post(`/prontuarios/${url}/evolucao`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Atualiza Evolução
   * @param dados -> Dados da Evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   */
  public async atualizarEvolucao(dados: any, url: string): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${url}/evolucao/${dados.id}`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /**
   * Aprova uma evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   * @param evolucaoID number
   */
  public async aprovaEvolucao(url:string, evolucaoID: number): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${url}/evolucao/aprovacao/${evolucaoID}`, {}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
