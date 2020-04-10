import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Medicamento } from 'src/app/models/medicamento';
import * as moment from 'moment';
import { Profissao } from 'src/app/models/profissao';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-medicamentos-edicao',
  templateUrl: './medicamentos-edicao.page.html',
  styleUrls: ['./medicamentos-edicao.page.scss'],
})
export class MedicamentosEdicaoPage implements OnInit {

  form: FormGroup;
  medicamento: Medicamento = new Medicamento();
  podeEditar = false;
  
  constructor(private formBuilder: FormBuilder, private location: Location, private toastCtrl: ToastController,
      private navExtra: NavExtrasService, private medicamentoSrv: MedicamentosService, 
      private loadingController: LoadingController, private usuariosSrv: UsuariosService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'descricao': ['', Validators.required],
      'inicio': [moment().format('YYYY-MM-DD'), Validators.required],
      'tipo': [1, Validators.required],
      'duracao_dias': [0],
      'observacao': [''],
    })
  }

  ionViewDidEnter() {
    const usuario = this.usuariosSrv.usuarioLogado;
    const area = this.navExtra.get('area', new Profissao(1), false);
    this.medicamento = this.navExtra.get('medicamento', new Medicamento());
    this.podeEditar = (usuario.nivel_acesso == 1 && area.id == usuario.profissao_id)
    this.form.patchValue(this.medicamento);
  }

  /** Cadastra ou Atualiza o medicamento */
  async salvar() {
    const loading = await this.loadingController.create({message: 'Salvando', spinner: 'circles'});
    this.medicamento = Object.assign(this.medicamento, this.form.value);
    
    loading.present();
    if (this.medicamento.id == null) { //cadastro
      const area = this.navExtra.get('area', new Profissao(1, 'Nutrição', 'nutricao'), false);
      const paciente = this.navExtra.get('paciente', new Paciente(1), false);
      
      this.medicamento.area_id = area.id;
      this.medicamento.paciente_id = paciente.id;
      var retorno = await this.medicamentoSrv.cadastrar(this.medicamento);
    } else //Atualiza
      var retorno =  await this.medicamentoSrv.atualizar(this.medicamento);
    
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }

}
