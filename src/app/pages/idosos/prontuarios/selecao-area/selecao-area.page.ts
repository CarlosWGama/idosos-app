import { Component, OnInit } from '@angular/core';
import { Profissao } from 'src/app/models/Profissao';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-selecao-area',
  templateUrl: './selecao-area.page.html',
  styleUrls: ['./selecao-area.page.scss'],
})
export class SelecaoAreaPage implements OnInit {

  area: Profissao;
  temMedicamentos: boolean = false;

  constructor(private router:Router, private navExtra:NavExtrasService, private toastCtrl:ToastController) { }

  ngOnInit() {
    this.area = this.navExtra.get('area', new Profissao(1, 'Nutrição'), false);
    //Libera medicamento
    const areasComMedicamento = [1]; 
    this.temMedicamentos = areasComMedicamento.includes(this.area.id);
  }

  naoImplementadoAinda() {
    this.toastCtrl.create({message:'Recurso não implementado ainda', duration:3000}).then(t => t.present())
  }

}
