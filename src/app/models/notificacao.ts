import { Profissional } from './profissional';
import { Usuario } from './usuario';

export class Notificacao {

    public constructor(public codigo?: number, public titulo?:string, public observacao?: string, 
                       public autor?:Usuario, public lido?:boolean, public dataCadastro?: string) {}
}
