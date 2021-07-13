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
      'estatura': [null],
      'perimetro_braquial': [null],
      'osteoporose': [false],
      'demencia': [false],
      'demencia_qual': [null],
      
      //Avaliação Multidimensional (alterações)
      'nutricao': [false],
      'nutricao_qual': [null],

      'visao': [false],
      'visao_qual': [null],
     
      'audicao': [false],
      'audicao_qual': [null],
      
      'incontinencia': [false],
      'incontinencia_qual': [null],
     
      'depressao': [false],
      'depressao_qual': [null],
      'depressao_data': [null],
           
      'cognicao': [false],
      'cognicao_qual': [null],
      
      'mmss': [false],
      'mmss_qual': [null],
      'mmss_data': [null],
      
      'mmii': [false],
      'mmii_qual': [null],
      'mmii_data': [null],
      
      'queda': [false],
      'queda_data': [null],
    })    

    await super.ngOnInit(); 
  }

}
