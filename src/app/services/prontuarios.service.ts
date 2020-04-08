import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProntuariosService extends ApiService {


  /**
   * Recupera as evoluções
   * @param url -> Url base que será usada para o servidor
   */
  public async evolucoes(url: string): Promise<any[]> {
    return new Promise(resolve => resolve([]));
  }

  /**
   * Recupera a ultima evolução aprovada para Ficha de Avaliação do paciente
   * @param url -> Url base que será usada para o servidor
   */
  public async fichaAvaliacao(url: string): Promise<any> {
    return new Promise(resolve => resolve({'usuario_id':1}));
  }


  /**
   * Cadastra uma nova ficha para evolução
   * @param dados -> São os dados que serão enviados
   * @param url -> Url base que será usada para o servidor
   */
  public async cadastrarFicha(dados: object, url: string): Promise<{sucesso:boolean, error?:string}> {
    return new Promise(resolve => resolve({sucesso: true}));
    //return this.post('/pacientes', {paciente}, true).then(resposta => { return {sucesso: true} })
    //.catch(erro => {
    //  return {sucesso: false, error:Object.values(erro.error).join(',')}
    //})
  }

  /**
   * Atualiza uma evolução
   * @param dados -> São os dados que serão enviados
   * @param url -> Url base que será usada para o servidor
   */
  public async atualizarFicha(dados: object, url: string): Promise<{sucesso:boolean, error?:string}> {
    return new Promise(resolve => resolve({sucesso: true}));

    //return this.put(`/pacientes/${paciente.id}`, {paciente}, true).then(resposta => { return {sucesso: true} })
    //.catch(erro => {
      // return {sucesso: false, error:Object.values(erro.error).join(',')}
    //})
  }

  /**
   * Aprova uma evolução
   * @param evolucaoID number
   */
  public async aprovaEvolucao(evolucaoID: number): Promise<{sucesso:boolean, error?:string}> {
    return new Promise(resolve => resolve({sucesso: true}));

    //return this.put(`/pacientes/${paciente.id}`, {paciente}, true).then(resposta => { return {sucesso: true} })
    //.catch(erro => {
      // return {sucesso: false, error:Object.values(erro.error).join(',')}
    //})
  }
}
