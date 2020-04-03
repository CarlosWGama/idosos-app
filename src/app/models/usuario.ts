import { Profissao } from './Profissao';

export class Usuario {
    /**
     * 
     * @param id 
     * @param nome 
     * @param profissao_id 1 - Geral | 2 - Nutrucionista
     * @param nivel_acesso 1 - Professor | 2 - Monitor | 3 - Aluno
     */
    public constructor(public id?: number, public nome?:string, public profissao_id?: number, public profissao?: Profissao, public nivel_acesso?: 1|2|3) {}
}
