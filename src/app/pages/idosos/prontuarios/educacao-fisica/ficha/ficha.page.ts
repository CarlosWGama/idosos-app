import { Component, OnInit } from '@angular/core';
import { FichaAvaliacaoModelo } from '../../ficha-avaliacao.modelo';
import * as moment from 'moment';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.page.html',
  styleUrls: ['./ficha.page.scss'],
})
export class FichaPage extends FichaAvaliacaoModelo implements OnInit {

  mediaMaoDireita = '0';
  mediaMaoEsquerda = '0';

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],
      'glicemia_capilar': [null],
      'pressao_arterial': [null],
      'frequencia_cardiaca': [null],
      'saturacao': [null],
      'temperatura': [null],
      'pas_tornozelo_direito': [null],
      'pas_tornozelo_esquerdo': [null],
      'pas_braquial_direito': [null],
      'pas_braquial_esquerdo': [null],
      'indice_tornozelo_braquial_direito': [null],
      'indice_tornozelo_braquial_esquerdo': [null],
      
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
      'perimetro_quadril': [null],
      'circuferencia_antebraco': [null],
      'circuferencia_panturrilha': [null],
      'altura_joelho': [null],
      'dobra_coxa': [null],
      'mma': [null],
      'imma': [null],
      
      //Força e Pressão Manual
      'preensao_manual1': [null],
      'preensao_manual2': [null],
      'preensao_manual3': [null]
    })    

    await super.ngOnInit(); 
  }

}
