
export class NutricaoFicha {

    /**
     * 
     * @param id number
     * @param paciente_id number
     * @param usuario_id number ID do usuário que cadastrou o paciente 
     * @param data string
     * Saúde gastrointestinal
     */
    public constructor(public id?: number, public paciente_id?: number, public usuario_id?: number, public data?: string,
        public saude_gastroinstestinal?: number[], public habito_intestinal_dia?:number, public habito_intestinal_semana?:number,
        public consistencia_fezes:number = 1, public laxante: boolean = false, public apetite: number = 1, public sobra_comida: number = 0,
        public aversao_alimentar?:string, public intolerencia_alimentar?: string, public alergia_alimentar?: string, public sede: boolean = false,
        public liquidos_diarios: number = 2, public liquido_consumo: number = 1, public suplemento: boolean = false,
        public peso_atual?:number, public peso_usual?: number, public peso_estimado?:number, public perda_peso?: number,
        public membro_amputado?: number[], public segmentacao_amputado?:number, public altura?:number, public altura_joelho?: number, public semi_envergadura?: number,
        public altura_estimada?: number, public imc?:number, public circunferencia_panturrilha?:number, public circunferencia_braco?:number,
        public circunferencia_pulso?:number, public dct?:number, public dcse?:number, public circunferencia_muscular_braco?:number,
        public circunferencia_cintura?:number, public marcapasso: boolean = false, public edema:boolean = false, public edema_localizacao?:string,
        public cacifo: boolean = false 

        
        
        ) {}
}
