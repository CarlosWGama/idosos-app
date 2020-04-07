
export class DadosClinicos {

    /**
     * 
     * @param id number
     * @param paciente_id number
     * @param condicoes_clinicas number[]
     * @param condicao_clinica_outras string
     * @param plano boolean
     * @param cartao_sus boolean
     * @param fumante boolean
     * @param fumante_idade number
     * @param fumante_media_cigarros number
     * @param etilista number | 1 - ex etilista | 0 - nunca foi etilista    
     * @param sono number | 0 - dorme bem | 1 - tem insônia | 2 - Não sabe informar
     * @param protese_dentaria boolean
     * @param medicamento_continuo  boolean
     * @param medicamento_fornecimento | 0 Não | 1 Sim | 2 alguns são fornecidos outros comprados. 
     * @param queda number | 0 não | 1 sim | 3 não recorda   
     * @param dispositivo_andar number | 0 Nenhum | 1 andador | 2 utilizava cadeira de rodas | 3 bengala  
     * @param atividade_recreativa boolean
     * @param cf_banhar number | 0 independente | 1 necessita de ajuda não humana |2 Dependência completa       
     * @param cf_vestir number |0 independente | 1 necessita de ajuda não humana |2 dependência completa    
     * @param cf_uso_banheiro number |0 independente | 1 necessita de ajuda não humana |2 dependência completa    
     * @param cf_transferir number |0 independente | 1 necessita de ajuda não humana |2 dependência completa    
     * @param cf_continencia number |0 Tem completo controle sobre suas eliminações |1 É parcial ou totalmente incontinente do intestino e bexiga 
     * @param cf_alimentar number |0 independente | 1 necessita de ajuda não humana |2 dependência completa    
     */
    public constructor(public id?: number, public paciente_id?: number, public condicoes_clinicas?: number[],
        public condicao_clinica_outras?: string, public plano: boolean = false, public cartao_sus:boolean = false, 
        public fumante: boolean = false, public fumante_idade: number = 0, public fumante_media_cigarros?: number,
        public etilista?: number, public sono?: number, public protese_dentaria: boolean = false, public medicamento_continuo: boolean = false,
        public medicamento_fornecimento?: number, public queda:number = 0, public dispositivo_andar: number = 0,
        public atividade_recreativa: boolean = false,
        public cf_banhar: number = 0, public cf_vestir: number = 0, public cf_uso_banheiro: number = 0,
        public cf_transferir: number = 0, public cf_continencia: number = 0, public cf_alimentar: number = 0) {}
}
