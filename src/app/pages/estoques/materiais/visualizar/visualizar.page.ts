import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import * as moment from 'moment';
import { ModeloEstoqueVisualizarPage } from '../../modelo-estoques-visualizar';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage extends ModeloEstoqueVisualizarPage implements OnInit {

  async ngOnInit() {
    this.tipoProduto = 'materiais';
    this.form = this.formBuilder.group({
      'id': null,
      'nome': [null, Validators.required],
      'quantidade': [null],
      'saida': [null],
    })

    await super.ngOnInit(); 
  }

}
