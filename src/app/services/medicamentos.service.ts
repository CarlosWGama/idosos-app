import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Medicamento } from '../models/medicamento';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService extends ApiService {

  /** Busca todos os medicamentos ativos */ 
  public buscarAtivos(pacienteID: number, areaID: number): Promise<Medicamento[]> {
    return this.get(`/medicamentos/ativo/${pacienteID}/${areaID}`, true).then(resposta => {
      const medicamentos: Medicamento[] = [];

      resposta.medicamentos.forEach(m => {
        medicamentos.push(Object.assign(new Medicamento, m))
      });

      return medicamentos;
    })
  }

  /** Busca todos os medicamentos inativos */ 
  public buscarInativos(pacienteID: number, areaID: number): Promise<Medicamento[]> {
    return this.get(`/medicamentos/inativo/${pacienteID}/${areaID}`, true).then(resposta => {
      const medicamentos: Medicamento[] = [];

      resposta.medicamentos.forEach(m => {
        medicamentos.push(Object.assign(new Medicamento, m))
      });

      return medicamentos;
    })
  }

  /** Cada um novo medicamento */ 
  public cadastrar(medicamento: Medicamento): Promise<{sucesso:boolean, error?:string}> {
    return this.post('/medicamentos', {medicamento}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** Atualiza um  medicamento */ 
  public atualizar(medicamento: Medicamento): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/medicamentos/${medicamento.id}`, {medicamento}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
  
  /** exclui um  medicamento */ 
  public excluir(medicamento: Medicamento): Promise<{sucesso:boolean, error?:string}> {
    return this.delete(`/medicamentos/${medicamento.id}`, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** desativa um  medicamento */ 
  public async desativarMedicamento(medicamentoID: number):Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/medicamentos/ativacao/${medicamentoID}/0`, {}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }

  /** ativa um  medicamento */ 
  public async ativarMedicamento(medicamentoID: number): Promise<{sucesso:boolean, error?:string}> {
    return this.put(`/medicamentos/ativacao/${medicamentoID}/1`, {}, true).then(resposta => { return {sucesso: true} })
    .catch(erro => {
      return {sucesso: false, error:Object.values(erro.error).join(',')}
    })
  }
}
