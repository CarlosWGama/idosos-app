import * as moment from 'moment';

export class Medicamento {

    /**
     * Define como é o Mediccamento
     * @param id 
     * @param paciente_id | Paciente que está tomando o medicamentoC
     * @param area_id | A qual area o medicamento está relacionado
     * @param descricao | nome do medicamento
     * @param ativo | Se o paciente está tomando o medicamento no momento
     * @param inicio | QUando começa a tomar o medicamento
     * @param tipo | 1 - Continuo | 2 - Por dias
     * @param duracao_dias | Duração em Dias
     * @param observacao | Informação
     * @param posologia | Horarios
     */
    constructor(public id?:number, public descricao?:string, public paciente_id?: number, public area_id?: number, public tipo:number = 1, public ativo:boolean = true,
            public duracao_dias?: number, public inicio?:string, public observacao?:string, public posologia?:string) {}


    get duracao() {
        return moment(this.inicio).add(this.duracao_dias, 'day').format('DD/MM/YYYY');
    }
}