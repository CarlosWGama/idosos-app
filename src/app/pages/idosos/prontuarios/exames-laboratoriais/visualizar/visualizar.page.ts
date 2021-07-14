import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Paciente } from '../../../../../models/paciente';
import { Usuario } from '../../../../../models/usuario';
import { ExamesLaboratoriaisService } from '../../../../../services/exames-laboratoriais.service';
import { NavExtrasService } from '../../../../../services/nav-extras.service';
import { UsuariosService } from '../../../../../services/usuarios.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  paciente:Paciente;
  exame: any = {id:null};
  acessoEdicao: boolean = true;
  protected id: number = null;
    
  constructor(protected formBuilder: FormBuilder, protected location: Location, protected toastCtrl: ToastController, protected loadingCtrl:LoadingController,
      protected navExtra: NavExtrasService, protected usuarioSrv: UsuariosService, protected examesSrv: ExamesLaboratoriaisService,
      protected cd: ChangeDetectorRef) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],

      'glicemia_jejum': [null],
      'hgt': [null],
      'hemoglobina_glicosilada': [null],
      'colesterol_total': [null],
      'hdl': [null],
      'ldl': [null],
      'triglicerideos': [null],
      'creatinina_serica': [null],
      'potassio_serico': [null],
      
      'equ_infecccao_urinaria': [null],
      'equ_proteinuria': [null],
      'equ_corpos_cetonicos': [null],
      'equ_sedimento': [null],

      'microalbuminuria': [null],
      'proteinuria': [null],
      'tsh': [null],
      'ecg': [null],
      
      'hematocrito': [null],
      'hemoglobina': [null],
      'vcm': [null],
      'chcm': [null],
      'plaquetas': [null],
    });

    await this.usuarioSrv.initialize();

    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.exame = this.navExtra.get('exame', {id: null});
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  /** Realiza a busca das informações do exame */
  async ionViewDidEnter() {
    //Ficha de Avaliação
    this.acessoEdicao = ([1].includes(this.usuario.nivel_acesso))
    this.form.patchValue(this.exame);
  }


  /** Salva o exame */
  async salvar() {
    const loading = await this.loadingCtrl.create({message:'Salvando', backdropDismiss: false});
    loading.present();
    
    let dados = Object.assign(this.exame, this.form.value);
    dados.paciente_id = this.paciente.id;
    
    console.log(dados)
    let retorno;
    if (this.exame.id == null)
      retorno = await this.examesSrv.cadastrar(dados);
    else
      retorno = await this.examesSrv.atualizar(dados);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 3000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, buttons:['Ok']}).then(t => t.present())
    }

  }

}
