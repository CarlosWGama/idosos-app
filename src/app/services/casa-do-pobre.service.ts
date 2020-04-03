import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Contato } from '../models/Contato';
import { Evento } from '../models/evento';
import { Foto } from '../models/foto';

@Injectable({
  providedIn: 'root'
})
export class CasaDoPobreService extends ApiService {

  /** Retorna uma String com o histórico da Casa do Pobre */
  public async historico(): Promise<string> {
    return this.get('/casa/historico');
  }

  /** Retorna os contatos da casa do pobre */
  public async contatos(): Promise<Contato[]> {
    return this.get('/casa/contatos').then(resposta => {
      const contatos: Contato[] = []
      resposta.contatos.forEach(contato => {
        contatos.push(Object.assign(new Contato, contato))
      });

      return contatos;
    })
  }

  /** Retorna os eventos do calendário */
  public async eventos(): Promise<Evento[]> {
    return this.get('/casa/agenda').then(resposta => {
      const eventos: Contato[] = []
      resposta.eventos.forEach(evento => {
        eventos.push(Object.assign(new Evento, evento))
      });

      return eventos;
    }) 
  }

  /**
   * Cadastra um novo evento
   * @param evento 
   */
  public async cadastrarEvento(evento: Evento): Promise<{sucesso:boolean, error?:string}> {
    console.log(evento)
    return this.post('/casa/agenda', {evento}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /**
   * Remove um evento
   * @param evento 
   */
  public async excluirEvento(eventoID: number): Promise<{sucesso:boolean, error?:string}> {
    return this.delete(`/casa/agenda/${eventoID}`, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }


  /** Retorna as fotos da casa do Pobre */
  public async getFotos(): Promise<Foto[]> {
    return this.get('/casa/fotos').then(resposta => {
      const fotos: Foto[] = []
      resposta.fotos.forEach(foto => {
        fotos.push(Object.assign(new Foto, foto))
      });

      return fotos;
    })
  }
}
