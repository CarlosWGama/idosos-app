import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from './../../services/pacientes.service';
import { Paciente } from 'src/app/models/paciente';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-cadastrar-idoso',
  templateUrl: './cadastrar-idoso.page.html',
  styleUrls: ['./cadastrar-idoso.page.scss'],
})
export class CadastrarIdosoPage implements OnInit {

  form:FormGroup;
  foto: string = 'assets/imgs/camera.png';


  constructor(private formBuilder: FormBuilder, private pacientesSrv:PacientesService,
              private toastController: ToastController, private location:Location,
              private camera: Camera) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'nome': ['', [Validators.required]],
      'dataNascimento': ['', [Validators.required]],
      'genero': [true],
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
    const retorno = await this.pacientesSrv.cadastrar(dados);
    if (retorno.sucesso) {
      this.toastController.create({message: 'Cadastrado com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastController.create({message: 'Falha no cadastro.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }

}
