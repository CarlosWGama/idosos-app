import { Component, OnInit } from '@angular/core';
import { ModeloEstoqueListarPage } from '../../modelo-estoques-listar';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage extends ModeloEstoqueListarPage implements OnInit {

  async ngOnInit() {
    this.tipoProduto = 'materiais';
    await super.ngOnInit();
  }

}
