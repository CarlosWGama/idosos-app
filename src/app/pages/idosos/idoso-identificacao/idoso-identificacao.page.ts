import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Paciente } from 'src/app/models/paciente';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Camera } from '@ionic-native/camera/ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-idoso-identificacao',
  templateUrl: './idoso-identificacao.page.html',
  styleUrls: ['./idoso-identificacao.page.scss'],
})
export class IdosoIdentificacaoPage implements OnInit {
  form:FormGroup;
  foto: string = 'assets/imgs/camera.png';
  idade = null;
  tempoCasa = null;
  paciente: Paciente = new Paciente;

  constructor(private formBuilder: FormBuilder, private pacientesSrv:PacientesService,
              private toastController: ToastController, private location:Location,
              private camera: Camera) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'nome': [this.paciente.nome, [Validators.required]],
      'data_nascimento': [this.paciente.data_nascimento, [Validators.required]],
      'masculino': [this.paciente.masculino],
      'escolaridade': [this.paciente.escolaridade, [Validators.required]],
      'tem_filhos': [this.paciente.tem_filhos],
      'estado_civil': [this.paciente.estado_civil, [Validators.required]],
      'data_admissao': [this.paciente.data_admissao, [Validators.required]],
      'motivo_admissao': [this.paciente.motivo_admissao, [Validators.required]],
      'frequencia_familiar': [this.paciente.frequencia_familiar, [Validators.required]]
    })
  }

  /** Exibe a idade do paciente */
  atualizarIdade() {
    this.idade = moment().diff(moment(this.form.get('data_nascimento').value), 'years');
  }

  /** Exibe o tempo do paciente na casa dos idosos */
  atualizarTempoCasa() {
    this.tempoCasa = moment().diff(moment(this.form.get('data_admissao').value), 'years');
  }

  /** Abre a camera para tirar uma foto */
  async tirarFoto() {
    this.camera.getPicture({
      allowEdit: true,
      cameraDirection:this.camera.Direction.BACK,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }).then((imageData) => {
      this.paciente.foto = this.foto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     })
  }

  /** Salva */
  async salvar() {
    const dados = Object.assign(this.paciente, this.form.value);
    console.log(dados);
    const retorno = await this.pacientesSrv.cadastrar(dados);
    if (retorno.sucesso) {
      this.toastController.create({message: 'Operaçãor realizada com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastController.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }


}
