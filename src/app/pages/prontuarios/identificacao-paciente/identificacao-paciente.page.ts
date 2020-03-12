import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';
import { ToastController } from '@ionic/angular';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Paciente } from 'src/app/models/paciente';
import { Location } from '@angular/common';

import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-identificacao-paciente',
  templateUrl: './identificacao-paciente.page.html',
  styleUrls: ['./identificacao-paciente.page.scss'],
})
export class IdentificacaoPacientePage implements OnInit {
  
  form:FormGroup;
  foto: string = 'assets/imgs/camera.png';
  private paciente: Paciente = new Paciente()

  constructor(private formBuilder: FormBuilder, private pacientesSrv:PacientesService,
              private toastController: ToastController, private location:Location,
              private camera: Camera, private navExtra: NavExtrasService) { }

  ngOnInit() {
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.form = this.formBuilder.group({
      'nome': [this.paciente.nome, [Validators.required]],
      'dataNascimento': [this.paciente.dataNascimento, [Validators.required]],
      'genero': [this.paciente.masculino],
      'escolaridade': [this.paciente.escolaridade, [Validators.required]],
      'naturalidade': [this.paciente.naturalidade, [Validators.required]],
      'dataAdmissao': [this.paciente.dataAdmissao, [Validators.required]],
      'motivoAdmissao': [this.paciente.motivoAdmissao, [Validators.required]]
    })
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
      this.foto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     })
  }

  /** Salva */
  async salvar() {
    const dados = Object.assign(new Paciente, this.form.value);
    const retorno = await this.pacientesSrv.atualizar(dados);
    if (retorno.sucesso) {
      this.navExtra.set('paciente', this.paciente);
      this.toastController.create({message: 'Cadastrado com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastController.create({message: 'Falha no cadastro.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }

}
