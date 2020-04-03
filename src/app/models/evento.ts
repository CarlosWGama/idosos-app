import { Usuario } from './usuario';

/**
 * Informação sobre um evento no calendário 
 */
export class Evento {

	//ADICIONAR - recorrente | autor
    public constructor(public id?: number, public descricao?:string, public data?: string, 
                    public observacao?:string, public recorrente?:boolean, public autor?:Usuario) {}
}
