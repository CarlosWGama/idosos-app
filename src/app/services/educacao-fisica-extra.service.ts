import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EducacaoFisicaExtraService extends ApiService {

  private url = 'educacao-fisica';
  // ============================ ACOMPANHAMENTO ======================================= //
  /**
   * Recupera as evoluções
   * @param url -> Url base que será usada para o servidor
   * @param pacienteID -> De qual paciente deve buscar as evoluções
   * @param inicio -> Começando em qual valor (paginação)
   * @param limite -> Quantos valores deve retornar
   */
  public async acompanhamentos(pacienteID: number, inicio: number = 0, limite: number = 10): Promise<any[]> {
    return this.get(`/prontuarios/${this.url}/acompanhamentos/${pacienteID}/${inicio}/${limite}`, true).then(resposta => {
      return resposta.acompanhamentos;
    }).catch(erro => []);
  }

  /** Cadastra Evolução
   * @param dados -> Dados da Evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   */
  public async cadastrarAcompanhamento(dados: any): Promise<{sucesso:boolean, error?:string}> {
    console.log(dados)
    return this.post(`/prontuarios/${this.url}/acompanhamentos`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Atualiza Evolução
   * @param dados -> Dados da Evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   */
  public async atualizarAcompanhamento(dados: any): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${this.url}/acompanhamentos/${dados.id}`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /**
   * Aprova uma evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   * @param acompanhamentoID number
   */
  public async aprovaAcompanhamento(acompanhamentoID: number): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${this.url}/acompanhamentos/aprovacao/${acompanhamentoID}`, {}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
