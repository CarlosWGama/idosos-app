import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientesService extends ApiService {


  /**
   * Cadastra um novo paciente
   * @param paciente 
   */
  public async cadastrar(paciente: Paciente): Promise<{sucesso:boolean, error?:string}> {
    return this.post('/pacientes', {paciente}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

   /**
   * Atualiza um paciente
   * @param paciente 
   */
  public async atualizar(paciente: Paciente): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/pacientes/${paciente.id}`, {paciente}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** 
   * Retorna os pacientes
   * @param genero 0 - Idosas | 1 - Idosos | 2 - Todos
   */
  public async getPacientes(genero:0|1|2): Promise<Paciente[]> {
    return this.get(`/pacientes/${genero}`, true).then(resposta => {
      const pacientes: Paciente[] = [];

      resposta.pacientes.forEach(p => {
        pacientes.push(Object.assign(new Paciente, p))
      });

      return pacientes;
    })

  }
}
