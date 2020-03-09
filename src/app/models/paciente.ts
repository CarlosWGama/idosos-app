
export class Paciente {

    public constructor(public codigo?: number, public nome?: string, public dataNascimento?:string,
        public foto:string = 'assets/imgs/avatar.png', public masculino: boolean = true) {}
}
