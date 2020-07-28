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
   */
  public async evolucoes(url: string): Promise<any[]> {
    return this.get(`/prontuarios/${url}`, true).then(resposta => {
      return resposta.prontuarios;
    }).catch(erro => []);
  }


  /**
   * Aprova uma evolução
   * @param evolucaoID number
   */
  public async aprovaEvolucao(url:string, evolucaoID: number): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/prontuarios/${url}/aprovacao/${evolucaoID}`, {}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
