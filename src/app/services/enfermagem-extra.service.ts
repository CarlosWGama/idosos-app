import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EnfermagemExtraService extends ApiService {

  private url = 'enfermagem';
  // ============================ CONSULTA ======================================= //
  /**
   * Recupera as evoluções
   * @param url -> Url base que será usada para o servidor
   * @param pacienteID -> De qual paciente deve buscar as evoluções
   * @param inicio -> Começando em qual valor (paginação)
   * @param limite -> Quantos valores deve retornar
   */
  public async consultas(pacienteID: number, inicio: number = 0, limite: number = 10): Promise<any[]> {
    return this.get(`/prontuarios/${this.url}/consulta-clinica/${pacienteID}/${inicio}/${limite}`, true).then(resposta => {
      return resposta.consultas;
    }).catch(erro => []);
  }

  /** Cadastra Evolução
   * @param dados -> Dados da Evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   */
  public async cadastrarConsulta(dados: any): Promise<{sucesso:boolean, error?:string}> {
    console.log(dados)
    return this.post(`/prontuarios/${this.url}/consulta-clinica`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Atualiza Evolução
   * @param dados -> Dados da Evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   */
  public async atualizarConsulta(dados: any): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${this.url}/consulta-clinica/${dados.id}`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /**
   * Aprova uma evolução
   * @param url -> Url base que será usado par ao servidor (da área)
   * @param acompanhamentoID number
   */
  public async aprovaConsulta(acompanhamentoID: number): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${this.url}/consulta-clinica/aprovacao/${acompanhamentoID}`, {}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
