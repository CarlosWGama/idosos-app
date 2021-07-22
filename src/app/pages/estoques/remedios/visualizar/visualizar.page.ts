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
    this.tipoProduto = 'remedios';
    this.form = this.formBuilder.group({
      'id': null,
      'nome': [null, Validators.required],
      'forma_farmaceutica': [1, Validators.required],
      'dosagem': [null],
      'validade': [null],
      'quantidade': [null],
      'saida': [null],
    })

    await super.ngOnInit(); 
  }
}
