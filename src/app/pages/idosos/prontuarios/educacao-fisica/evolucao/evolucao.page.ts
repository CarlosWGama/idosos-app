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
      'descricao': [null, Validators.required]
    })

    await super.ngOnInit(); 
  }

}
