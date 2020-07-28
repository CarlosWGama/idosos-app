import { OnInit, Injectable, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProntuariosService } from 'src/app/services/prontuarios.service';
import { Paciente } from 'src/app/models/paciente';
import { Profissao } from 'src/app/models/profissao';


/**
 * Classe Generica com as funções basicas de gerenciar Ficha de Avaliação/Evolução
 */
@Injectable()
export abstract class FichaAvaliacaoModelo implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  paciente:Paciente;
  ficha: any = {id:null};
  acessoEdicao: boolean = true;
  protected id: number = null;
  
  /** Define qual é a URL usada no servidor */
  protected url: string;
  
  constructor(protected formBuilder: FormBuilder, protected location: Location, protected toastCtrl: ToastController, protected loadingCtrl:LoadingController,
      protected navExtra: NavExtrasService, protected usuarioSrv: UsuariosService, protected prontuariosSrv: ProntuariosService,
      protected cd: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.usuarioSrv.initialize();
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  /** Realiza a busca das informações do prontuário */
  async ionViewDidEnter() {
    //Ficha de Avaliação
    this.ficha = await this.prontuariosSrv.fichaAvaliacao(this.url, this.paciente.id);
    this.podeEditar(); //Verifica quem pode editar

    if (this.ficha)
      this.form.patchValue(this.ficha);
  }

  /** Avalia de o usuário pode editar o campo */
  protected podeEditar() {
    const area = this.navExtra.get('area', new Profissao(1), false);

    //É professor ou moderador da area
    this.acessoEdicao = (this.usuario.profissao_id == area.id && [1,2].includes(this.usuario.nivel_acesso))
  }

  /** Salva a Ficha de Avaliação/Evolução */
  async salvar() {
    const loading = await this.loadingCtrl.create({message:'Salvando', backdropDismiss: false});
    loading.present();

    let dados = Object.assign(this.ficha, this.form.value);
    dados.paciente_id = this.paciente.id;
    console.log(dados);
    
    const retorno = await this.prontuariosSrv.salvarFicha(dados, this.url);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 3000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, buttons:['Ok']}).then(t => t.present())
    }

  }

}
