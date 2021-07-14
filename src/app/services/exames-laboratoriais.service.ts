import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ExamesLaboratoriaisService extends ApiService {

   /** Busca todos os exames */ 
   public buscar(pacienteID: number): Promise<any[]> {
    return this.get(`/exames-laboratoriais/${pacienteID}`, true).then(resposta => {
      return resposta.exames;
    })
  }

  /** Cada um novo exame */ 
  public cadastrar(exame): Promise<{sucesso:boolean, error?:string}> {
    return this.post('/exames-laboratoriais', {exame}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Atualiza um  exame */ 
  public atualizar(exame): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/exames-laboratoriais/${exame.id}`, {exame}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
  
  /** exclui um  exame */ 
  public excluir(exame): Promise<{sucesso:boolean, error?:string}> {
    return this.delete(`/exames-laboratoriais/${exame.id}`, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
