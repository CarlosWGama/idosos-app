import { Component, OnInit } from '@angular/core';
import { FichaEvolucaoModelo } from '../../ficha-evolucao.modelo';
import * as moment from 'moment';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.page.html',
  styleUrls: ['./evolucao.page.scss'],
})
export class EvolucaoPage extends FichaEvolucaoModelo implements OnInit {

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],
      
      //Evolução
      //Desempenho Funcional
      'sentar_cadeira': [null],
      'flexao_cotovelo': [null],
      'sentar_pes': [null],
      'timed_up_go': [null],
      'costas_maos': [null],
      'caminhada': [null],
      
      //Antropometria
      'massa_corporal': [null],
      'imc': [null],
      'estatura': [null],
      
      //Força e Pressão Manual
      'preensao_manual1': [null],
      'preensao_manual2': [null],
      'preensao_manual3': [null],
      
      //Hemodinâmica
      'pas': [null],
      'pad': [null],
      'fc': [null],
      'conduta': [null]
    })

  
            

    await super.ngOnInit(); 
  }


}
