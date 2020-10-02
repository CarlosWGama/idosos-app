import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import * as moment from 'moment';
import { FichaEvolucaoModelo } from '../../ficha-evolucao.modelo';

@Component({
  selector: 'app-evolucao',
  templateUrl: './evolucao.page.html',
  styleUrls: ['./evolucao.page.scss'],
})
export class EvolucaoPage  extends FichaEvolucaoModelo implements OnInit {

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],
      'descricao': [null, Validators.required]
    })

    await super.ngOnInit(); 
  }


}
