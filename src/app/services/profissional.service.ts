import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService extends ApiService {

  /** Retorna a equipe profissional da casa do pobre */
  public async getEquipeProfissional(): Promise<Usuario[]> {
      return this.get('/casa/equipe').then(resposta => {
        const equipe: Usuario[] = [];

        resposta.equipe.forEach(usuario => {
          equipe.push(Object.assign(new Usuario, usuario))
        });

        return equipe;
      })
  }

  /** Retorna os alunos de um professor */
  public async getAlunos(): Promise<Usuario[]> {
    return this.get('/usuarios/alunos', true).then(resposta => {
      const alunos: Usuario[] = [];
      resposta.alunos.forEach(usuario => {
        alunos.push(Object.assign(new Usuario, usuario))
      });

      return alunos;
    })
  }

  /**
   * Cadastra um novo aluno
   * @param aluno 
   */
  public async cadastrarAluno(aluno: Usuario): Promise<{sucesso:boolean, error?:string}> {
    return this.post('/usuarios/alunos', {aluno}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /**
   * Atualiza um aluno
   * @param aluno 
   */
  public async atualizarAluno(aluno: Usuario): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/usuarios/alunos/${aluno.id}`, {aluno}, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
        
        return {sucesso: false, error: Object.values(erro.error).join(',')}
      })
  }

  /**
   * Excluir um aluno
   * @param aluno 
   */
  public async removerAluno(alunoID:number): Promise<{sucesso:boolean, error?:string}> {
    return this.delete(`/usuarios/alunos/${alunoID}`, true).then(resposta => { return {sucesso: true} })
      .catch(erro => {
        return {sucesso: false, error: erro}
      })
  }

}
