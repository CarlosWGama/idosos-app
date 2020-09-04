import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Paciente } from 'src/app/models/paciente';
import { ToastController, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Camera } from '@ionic-native/camera/ngx';
import * as moment from 'moment';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

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
  usuario = new Usuario
  paciente: Paciente = new Paciente;

  constructor(private formBuilder: FormBuilder, private pacientesSrv:PacientesService,
              private toastController: ToastController, private location:Location,
              private camera: Camera, private navExtra: NavExtrasService, private usuarioSrv: UsuariosService,
              private loadingCtrl:LoadingController) { }

  async ngOnInit() {
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.form = this.formBuilder.group({
      'nome': null, 'data_nascimento': null, 'masculino': 1, 'escolaridade': null, 'tem_filhos': false,
      'estado_civil': null, 'etnia': null, 'data_admissao': null, 'motivo_admissao': null, 'frequencia_familiar': null
    }) 
  }

  async ionViewWillEnter() {
    //Busca os dados do usuário em caso de edição
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.form.patchValue(this.paciente);

    //Atualiza as informações dos usuários em caso de edição
    if (this.paciente && this.paciente.id) {
      this.foto = this.paciente.foto;
      this.atualizarIdade();
      this.atualizarTempoCasa();
    }
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
      quality: 40,
      targetHeight: 300,
      targetWidth: 300,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }).then((imageData) => {
      this.paciente.foto = this.foto = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     })
  }

  /** Salva */
  async salvar() {
    const loading = await this.loadingCtrl.create({spinner:'circles', message: 'Enviando dados', backdropDismiss: false});
    const dados = Object.assign(this.paciente, this.form.value);
    console.log(dados);
    loading.present();
    if (!this.paciente.id)
      var retorno = await this.pacientesSrv.cadastrar(dados);
    else 
      var retorno = await this.pacientesSrv.atualizar(dados);
    loading.dismiss();
    
    if (retorno.sucesso) {
      this.toastController.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastController.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }


}
