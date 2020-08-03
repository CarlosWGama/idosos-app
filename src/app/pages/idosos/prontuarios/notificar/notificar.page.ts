import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';
import { NavExtrasService } from '../../../../services/nav-extras.service';
import { NotificacaoService } from '../../../../services/notificacao.service';
import { UsuariosService } from '../../../../services/usuarios.service';
import * as moment from 'moment';
import { Paciente } from '../../../../models/paciente';
import { Profissao } from '../../../../models/profissao';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notificar',
  templateUrl: './notificar.page.html',
  styleUrls: ['./notificar.page.scss'],
})
export class NotificarPage implements OnInit {

  form: FormGroup;
  areas: Profissao[];
  
  constructor(private formBuilder: FormBuilder, private location: Location, private toastCtrl: ToastController,
      private navExtra: NavExtrasService, private notificacaoSrv: NotificacaoService, 
      private loadingController: LoadingController, private usuariosSrv: UsuariosService) { }

  ngOnInit() {
    this.areas = this.usuariosSrv.getAreas();
    this.form = this.formBuilder.group({
      'descricao': [null, Validators.required],
      'area_id': [null, Validators.required]
    })
  }

  ionViewDidEnter() {
    const usuario = this.usuariosSrv.usuarioLogado;
    //É professor ou moderador
    if (![1,2].includes(usuario.nivel_acesso))
      this.location.back();
  }

  /** Cadastra ou Atualiza o medicamento */
  async salvar() {
    const loading = await this.loadingController.create({message: 'Salvando', spinner: 'circles'});
    
    loading.present();
    const paciente = this.navExtra.get('paciente', new Paciente(1), false);
    const dados = this.form.value;
    dados.paciente_id = paciente.id;
    const retorno = await this.notificacaoSrv.notificar(dados);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }

}
