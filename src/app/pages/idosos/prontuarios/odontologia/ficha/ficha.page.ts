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

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],

      'odontograma_18': [0],
      'odontograma_17': [0],
      'odontograma_16': [0],
      'odontograma_15': [0],
      'odontograma_14': [0],
      'odontograma_13': [0],
      'odontograma_12': [0],
      'odontograma_11': [0],
      'odontograma_21': [0],
      'odontograma_22': [0],
      'odontograma_23': [0],
      'odontograma_24': [0],
      'odontograma_25': [0],
      'odontograma_26': [0],
      'odontograma_27': [0],
      'odontograma_28': [0],
      'odontograma_48': [0],
      'odontograma_47': [0],
      'odontograma_46': [0],
      'odontograma_45': [0],
      'odontograma_44': [0],
      'odontograma_43': [0],
      'odontograma_42': [0],
      'odontograma_41': [0],
      'odontograma_31': [0],
      'odontograma_32': [0],
      'odontograma_33': [0],
      'odontograma_34': [0],
      'odontograma_35': [0],
      'odontograma_36': [0],
      'odontograma_37': [0],
      'odontograma_38': [0],

      'condicoes_dentais_18': [null],
      'condicoes_dentais_17': [null],
      'condicoes_dentais_16': [null],
      'condicoes_dentais_15': [null],
      'condicoes_dentais_14': [null],
      'condicoes_dentais_13': [null],
      'condicoes_dentais_12': [null],
      'condicoes_dentais_11': [null],
      'condicoes_dentais_21': [null],
      'condicoes_dentais_22': [null],
      'condicoes_dentais_23': [null],
      'condicoes_dentais_24': [null],
      'condicoes_dentais_25': [null],
      'condicoes_dentais_26': [null],
      'condicoes_dentais_27': [null],
      'condicoes_dentais_28': [null],
      'condicoes_dentais_48': [null],
      'condicoes_dentais_47': [null],
      'condicoes_dentais_46': [null],
      'condicoes_dentais_45': [null],
      'condicoes_dentais_44': [null],
      'condicoes_dentais_43': [null],
      'condicoes_dentais_42': [null],
      'condicoes_dentais_41': [null],
      'condicoes_dentais_31': [null],
      'condicoes_dentais_32': [null],
      'condicoes_dentais_33': [null],
      'condicoes_dentais_34': [null],
      'condicoes_dentais_35': [null],
      'condicoes_dentais_36': [null],
      'condicoes_dentais_37': [null],
      'condicoes_dentais_38': [null],


      //Avaliação da condição periodontal
      'avaliacao_periodontal_18': [0],
      'avaliacao_periodontal_17': [0],
      'avaliacao_periodontal_16': [0],
      'avaliacao_periodontal_15': [0],
      'avaliacao_periodontal_14': [0],
      'avaliacao_periodontal_13': [0],
      'avaliacao_periodontal_12': [0],
      'avaliacao_periodontal_11': [0],
      'avaliacao_periodontal_21': [0],
      'avaliacao_periodontal_22': [0],
      'avaliacao_periodontal_23': [0],
      'avaliacao_periodontal_24': [0],
      'avaliacao_periodontal_25': [0],
      'avaliacao_periodontal_26': [0],
      'avaliacao_periodontal_27': [0],
      'avaliacao_periodontal_28': [0],
      'avaliacao_periodontal_48': [0],
      'avaliacao_periodontal_47': [0],
      'avaliacao_periodontal_46': [0],
      'avaliacao_periodontal_45': [0],
      'avaliacao_periodontal_44': [0],
      'avaliacao_periodontal_43': [0],
      'avaliacao_periodontal_42': [0],
      'avaliacao_periodontal_41': [0],
      'avaliacao_periodontal_31': [0],
      'avaliacao_periodontal_32': [0],
      'avaliacao_periodontal_33': [0],
      'avaliacao_periodontal_34': [0],
      'avaliacao_periodontal_35': [0],
      'avaliacao_periodontal_36': [0],
      'avaliacao_periodontal_37': [0],
      'avaliacao_periodontal_38': [0],

      'condicao_higiene_obs_periodontal': [null],
      
      //Tipo de Hipoteses
      'protese_superior': [0],
      'protese_inferior': [0],

      //Final
      'busca_ativa_lesoes': [null],
      'descricao_lesao': [null],
      'observacoes': [null]
    })

    await super.ngOnInit();
  }

}
