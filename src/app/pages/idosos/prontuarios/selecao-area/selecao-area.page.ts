import { Component, OnInit } from '@angular/core';
import { Profissao } from 'src/app/models/profissao';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-selecao-area',
  templateUrl: './selecao-area.page.html',
  styleUrls: ['./selecao-area.page.scss'],
})
export class SelecaoAreaPage implements OnInit {

  area: Profissao;
  temMedicamentos: boolean = false;

  constructor(private router:Router, private navExtra:NavExtrasService, private toastCtrl:ToastController) { }

  async ngOnInit() {
    this.area = this.navExtra.get('area', new Profissao(1, 'Nutrição', 'nutricao'), false);
    //Libera medicamento [Nutrição]
    const areasComMedicamento = [2]; 
    this.temMedicamentos = areasComMedicamento.includes(this.area.id);
  }

  /** Abre a ficha de avaliação */
  abrirFicha() {
    this.router.navigateByUrl(`/prontuarios/${this.area.url}/ficha`)
  }
  
  abrirEvolucoes() {
    this.router.navigateByUrl(`/prontuarios/evolucoes`)
  }

  abrirMedicamentos() {
    this.router.navigateByUrl('prontuarios/medicamentos/ativo');
  }


}
