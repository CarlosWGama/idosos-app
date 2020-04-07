import * as moment from 'moment';

export class Paciente {

    public constructor(public id?: number, public nome?: string, public data_nascimento?:string, public masculino: number = 1,
        public foto:string = 'assets/imgs/avatar.png', public escolaridade?:number,  public tem_filhos?:boolean, public estado_civil?:number,
        public frequencia_familiar?:number, public data_admissao?: string, public motivo_admissao?: number) {}

    /** Retorna quantos anos tem o paciente */
    get anos(): number {
        let anos = 0;
        if (this.data_nascimento != null)
            anos = moment().diff(moment(this.data_nascimento), 'years');
        return anos;
    }
}
