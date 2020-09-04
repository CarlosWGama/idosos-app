import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ToastController } from '@ionic/angular';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { DadosClinicos } from 'src/app/models/dados-clinicos';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-dados-clinicos',
  templateUrl: './dados-clinicos.page.html',
  styleUrls: ['./dados-clinicos.page.scss'],
})
export class DadosClinicosPage implements OnInit {

  form: FormGroup;
  paciente = new Paciente;
  dadosClinicos: DadosClinicos;
  usuario: Usuario = new Usuario;
  constructor(private formBuilder: FormBuilder, private location: Location, private toastCtrl: ToastController,
      private navExtra: NavExtrasService, private pacientesSrv: PacientesService, private usuarioSrv: UsuariosService ) { }

  ngOnInit() {
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.paciente = this.navExtra.get('paciente', new Paciente(1), false);
    this.form = this.formBuilder.group({
      condicoes_clinicas: [[]],
      condicao_clinica_outras: null, 
      plano:[false], 
      cartao_sus: [false],
      fumante: [false],
      fumante_idade: null, 
      fumante_media_cigarros: [0],
      etilista: [1],
      sono: [1], 
      protese_dentaria: [false], 
      medicamento_continuo: [false],
      medicamento_fornecimento: [1], 
      queda:[0], 
      dispositivo_andar: [0],
      atividade_recreativa: [false],
      cf_banhar: [0], cf_vestir: [0], cf_uso_banheiro: [0],
      cf_transferir: [0], cf_continencia: [0], cf_alimentar: [0],
      exercicios_fisicos: [null],
      realizou_cirurgia: [false], cirurgia: [null],
      tem_limitacao_osteoarticular: [false], limitacao_osteoarticular: [null],
      tem_limitacao_musculoarticular: [false], limitacao_musculoarticular: [null]
    })
  }

  async ionViewWillEnter() {
    this.dadosClinicos = await this.pacientesSrv.buscarDadosClinicos(this.paciente.id);
    this.form.patchValue(this.dadosClinicos);
  }

  /** Salva os dados clinicos do paciente */
  async salvar() {
    this.dadosClinicos = Object.assign(this.dadosClinicos, this.form.value);
    const retorno = await this.pacientesSrv.atualizaDadosClinicos(this.dadosClinicos);

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }

}
