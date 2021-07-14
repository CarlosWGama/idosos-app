import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Paciente } from '../../../../../models/paciente';
import { Profissao } from '../../../../../models/profissao';
import { Usuario } from '../../../../../models/usuario';
import { EnfermagemExtraService } from '../../../../../services/enfermagem-extra.service';
import { NavExtrasService } from '../../../../../services/nav-extras.service';
import { UsuariosService } from '../../../../../services/usuarios.service';

@Component({
  selector: 'app-consulta-clinica',
  templateUrl: './consulta-clinica.page.html',
  styleUrls: ['./consulta-clinica.page.scss'],
})
export class ConsultaClinicaPage implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  paciente:Paciente;
  consulta: any = {id:null};
  acessoEdicao: boolean = true;
  protected id: number = null;
    
  constructor(protected formBuilder: FormBuilder, protected location: Location, protected toastCtrl: ToastController, protected loadingCtrl:LoadingController,
      protected navExtra: NavExtrasService, protected usuarioSrv: UsuariosService, protected enfermagemSrv: EnfermagemExtraService) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],
      
      //Consulta Clinica
      'pressao_arterial': [null],
      'peso': [null],
      'imc': [null],
      
      'framingham': [null],
      'lesoes_orgao_alvo': [null],

      'alteracao_pes': [false],
      'alteracao_pes_qual': [null],
      
      'alteracao_fisico': [false],
      'alteracao_fisico_qual': [null],
    
      'fragilidade': [false],
      'fragilidade_qual': [null],
      
      'orientacao_nutricional': [false],
      'orientacao_atividade_fisica': [false],
    })

    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.consulta = this.navExtra.get('consulta', {id: null});
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  /** Realiza a busca das informações do prontuário */
  async ionViewDidEnter() {
    //Ficha de Avaliação
    if (this.consulta.id == null)
      this.podeEditar(null); //Verifica quem pode editar
    else
      this.podeEditar(this.consulta.usuario_id); //Verifica quem pode editar
    
    this.form.patchValue(this.consulta);
  }

  /** Avalia de o usuário pode editar o campo */
  protected podeEditar(donoID: number) {
    const area = this.navExtra.get('area', new Profissao(6), false);

    //É professor ou moderador da area
    this.acessoEdicao = (this.usuario.profissao_id == area.id && (donoID == null || [1,2].includes(this.usuario.nivel_acesso) || donoID == this.usuario.id))
  }

  /** Salva o Teste de Acompanhamento */
  async salvar() {
    const loading = await this.loadingCtrl.create({message:'Salvando', backdropDismiss: false});
    loading.present();
    
    let dados = Object.assign(this.consulta, this.form.value);
    dados.paciente_id = this.paciente.id;
    dados.usuario_id = this.usuario.id;
    
    let retorno;
    if (this.consulta.id == null)
      retorno = await this.enfermagemSrv.cadastrarConsulta(dados);
    else
      retorno = await this.enfermagemSrv.cadastrarConsulta(dados);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 3000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, buttons:['Ok']}).then(t => t.present())
    }

  }
  
}
