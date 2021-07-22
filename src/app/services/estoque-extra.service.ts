import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EstoqueExtraService extends ApiService {

  /**
   * Recupera os produtos que podem ser remédio ou materiail
   * @param url -> remedio ou materiais
   * @param inicio -> Começando em qual valor (paginação)
   * @param limite -> Quantos valores deve retornar
   */
  public async buscar(url: 'remedios'|'materiais' = 'remedios', inicio: number = 0, limite: number = 10): Promise<any[]> {
    return this.get(`/estoque/${url}/${inicio}/${limite}`, true).then(resposta => {
      return resposta.produtos;
    }).catch(erro => []);
  }

  /** Cadastra um novo produto
   * @param dados -> Dados do produto
   * @param url -> Url base que será usado par ao servidor (materiais ou remedios)
   */
  public async cadastrar(dados: any, url: 'remedios'|'materiais' = 'remedios'): Promise<{sucesso:boolean, error?:string}> {
    console.log(dados)
    return this.post(`/estoque/${url}`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Atualiza produto
   * @param dados -> Dados do produto
   * @param url -> Url base que será usado par ao servidor (materiais ou remedios)
   */
  public async atualizar(dados: any, url: 'remedios'|'materiais' = 'remedios'): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/estoque/${url}/${dados.id}`, {dados}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /**
   * Remove o produto
   * @param produtoID number
   * @param url -> Url base que será usado par ao servidor (da materia sou métodos)
   */
  public async remover(produtoID: number, url: 'remedios'|'materiais' = 'remedios'): Promise<{sucesso:boolean, error?:string}> {
    return this.delete(`/estoque/${url}/${produtoID}`, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
