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
    return new Promise(resolve => {
      resolve({sucesso:true})
    })

  }

  /** 
   * Retorna os pacientes
   * @param genero 0 - Idosas | 1 - Idosos | 2 - Todos
   */
  public async getPacientes(genero:0|1|2): Promise<Paciente[]> {
    return new Promise(resolve => {
        const idosos = []
        if ([1, 2].includes(genero)) {
            idosos.push(new Paciente(1, 'José', '01/01/1950', 'https://abrilsaude.files.wordpress.com/2018/04/idoso-sorrindo.jpg'))
            idosos.push(new Paciente(1, 'João', '01/01/1950', 'https://revistavisaojuridica.com.br/wp-content/uploads/2017/10/estatuto-idoso.jpg'))
            idosos.push(new Paciente(1, 'Josivaldo', '01/01/1950', 'https://jornalboavista.com.br/site/wp-content/uploads/2018/06/thumbnail_idoso_perdido_620x465.jpg'))
            idosos.push(new Paciente(1, 'Juvenal', '01/01/1950', 'https://us.123rf.com/450wm/imtmphoto/imtmphoto1612/imtmphoto161200057/67522540-retrato-de-mayor-triste-asi%C3%A1tico-hombre-mano-en-la-barbilla-vista-frontal-.jpg?ver=6'))
            idosos.push(new Paciente(1, 'José', '01/01/1950', 'https://abrilsaude.files.wordpress.com/2018/04/idoso-sorrindo.jpg'))
            idosos.push(new Paciente(1, 'João', '01/01/1950', 'https://revistavisaojuridica.com.br/wp-content/uploads/2017/10/estatuto-idoso.jpg'))
            idosos.push(new Paciente(1, 'Josivaldo', '01/01/1950', 'https://jornalboavista.com.br/site/wp-content/uploads/2018/06/thumbnail_idoso_perdido_620x465.jpg'))
            idosos.push(new Paciente(1, 'Juvenal', '01/01/1950', 'https://us.123rf.com/450wm/imtmphoto/imtmphoto1612/imtmphoto161200057/67522540-retrato-de-mayor-triste-asi%C3%A1tico-hombre-mano-en-la-barbilla-vista-frontal-.jpg?ver=6'))
        }
        
        if ([0, 2].includes(genero)) {
            idosos.push(new Paciente(1, 'Maria', '01/01/1950', 'https://coraresidencial.com.br/wp-content/uploads/2019/02/GettyImages-1076490168-768x512.jpg'))
            idosos.push(new Paciente(1, 'Marinete Mendes dos Santos Correia Lessa', '01/01/1950', 'https://www.envolverde.com.br/wp-content/uploads/idosocapa.jpg'))
            idosos.push(new Paciente(1, 'Helena', '01/01/1950', 'https://www.50emais.com.br/wp-content/uploads/2013/02/Idosa-2.jpg'))
            idosos.push(new Paciente(1, 'Marta', '01/01/1950', 'https://informa.life/wp-content/uploads/2013/09/idosa1.jpg'))
            idosos.push(new Paciente(1, 'Maria', '01/01/1950', 'https://coraresidencial.com.br/wp-content/uploads/2019/02/GettyImages-1076490168-768x512.jpg'))
            idosos.push(new Paciente(1, 'Marinete Mendes dos Santos Correia Lessa', '01/01/1950', 'https://www.envolverde.com.br/wp-content/uploads/idosocapa.jpg'))
            idosos.push(new Paciente(1, 'Helena', '01/01/1950', 'https://www.50emais.com.br/wp-content/uploads/2013/02/Idosa-2.jpg'))
            idosos.push(new Paciente(1, 'Marta', '01/01/1950', 'https://informa.life/wp-content/uploads/2013/09/idosa1.jpg'))
        }
      
        resolve(idosos)
    })

  }
}
