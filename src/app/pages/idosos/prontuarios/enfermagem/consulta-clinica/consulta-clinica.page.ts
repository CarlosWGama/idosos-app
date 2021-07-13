import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { Paciente } from '../../../../../models/paciente';
import { Profissao } from '../../../../../models/profissao';
import { Usuario } from '../../../../../models/usuario';
import { EducacaoFisicaExtraService } from '../../../../../services/educacao-fisica-extra.service';
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
  acompanhamento: any = {id:null};
  acessoEdicao: boolean = true;
  protected id: number = null;
    
  constructor(protected formBuilder: FormBuilder, protected location: Location, protected toastCtrl: ToastController, protected loadingCtrl:LoadingController,
      protected navExtra: NavExtrasService, protected usuarioSrv: UsuariosService, protected educacaoFisicaSrv: EducacaoFisicaExtraService) { }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],
      
      //Teste de Acompanhamento
      //Desempenho Funcional
      'sentar_cadeira': [null],
      'flexao_cotovelo': [null],
      'sentar_pes': [null],
      'timed_up_go': [null],
      'costas_maos': [null],
      'caminhada': [null],
      
      //Antropometria
      'massa_corporal': [null],
      'imc': [null],
      'estatura': [null],
      'perimetro_quadril': [null],
      'circuferencia_antebraco': [null],
      'circuferencia_panturrilha': [null],
      'altura_joelho': [null],
      'dobra_coxa': [null],
      'mma': [null],
      'imma': [null],
      
      //Força e Pressão Manual
      'preensao_manual1': [null],
      'preensao_manual2': [null],
      'preensao_manual3': [null],
      
      //Hemodinâmica
      'pas': [null],
      'pad': [null],
      'fc': [null],
      'conduta': [null]
    })

    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.acompanhamento = this.navExtra.get('acompanhamento', {id: null});
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  /** Realiza a busca das informações do prontuário */
  async ionViewDidEnter() {
    //Ficha de Avaliação
    if (this.acompanhamento.id == null)
      this.podeEditar(null); //Verifica quem pode editar
    else
      this.podeEditar(this.acompanhamento.usuario_id); //Verifica quem pode editar
    
    this.form.patchValue(this.acompanhamento);
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
    
    let dados = Object.assign(this.acompanhamento, this.form.value);
    dados.paciente_id = this.paciente.id;
    dados.usuario_id = this.usuario.id;
    
    let retorno;
    if (this.acompanhamento.id == null)
      retorno = await this.educacaoFisicaSrv.cadastrarAcompanhamento(dados);
    else
      retorno = await this.educacaoFisicaSrv.atualizarAcompanhamento(dados);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 3000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, buttons:['Ok']}).then(t => t.present())
    }

  }
  
}
