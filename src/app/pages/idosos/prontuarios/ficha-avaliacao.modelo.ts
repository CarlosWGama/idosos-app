import { Component, OnInit, Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastController, LoadingController } from '@ionic/angular';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProntuariosService } from 'src/app/services/prontuarios.service';
import { Paciente } from 'src/app/models/paciente';
import { Profissao } from 'src/app/models/profissao';

@Injectable()
/**
 * Classe Generica com as funções basicas de gerenciar Ficha de Avaliação/Evolução
 */
export class FichaAvaliacaoModelo implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  paciente:Paciente;
  ficha: any = {id:null};
  acessoEdicao: boolean = true;
  protected id: number = null;
  
  /** Define qual é a URL usada no servidor */
  protected url: string;
  
  constructor(protected formBuilder: FormBuilder, protected location: Location, protected toastCtrl: ToastController, protected loadingCtrl:LoadingController,
      protected navExtra: NavExtrasService, protected usuarioSrv: UsuariosService, protected prontuariosSrv: ProntuariosService) { }

  async ngOnInit() {
    await this.usuarioSrv.initialize();
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.usuario = this.usuarioSrv.usuarioLogado;
    console.log(this.usuario);
  }

  /** Realiza a busca das informações do prontuário */
  async ionViewDidEnter() {
    //Evolução
    this.ficha = this.navExtra.get('prontuario', {id:null});
    console.log(this.ficha);

    //Ficha de Avaliação
    if (this.ficha.id == null) {
      this.ficha = await this.prontuariosSrv.fichaAvaliacao(this.url);
      this.podeEditar(null); //Qualquer um pode criar uma nova evolução
    } else {
      this.podeEditar(this.ficha['usuario_id']); 
    }

    if (this.ficha)
      this.form.patchValue(this.ficha);
  }

  /** Avalia de o usuário pode editar o campo */
  protected podeEditar(donoID: number) {
    const area = this.navExtra.get('area', new Profissao(1), false);
    //É professor ou moderador ou é o dono da evolução
    this.acessoEdicao = (this.usuario.profissao_id == area.id && (donoID == null || [1,2].includes(this.usuario.nivel_acesso) || donoID == this.usuario.id))  
    // this.acessoEdicao = false;  
  }

  /** Salva a Ficha de Avaliação/Evolução */
  async salvar() {
    const loading = await this.loadingCtrl.create({message:'Salvando', backdropDismiss: false});
    loading.present();

    let dados = this.form.value;
    dados.paciente_id = this.paciente.id;
    let retorno = null;
    if (this.ficha.id == null) { //cadastra
      dados.usuario_id = this.usuario.id;
      retorno = await this.prontuariosSrv.cadastrarFicha(dados, this.url);
    } else 
      retorno = await this.prontuariosSrv.atualizarFicha(dados, this.url);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }

  }

}
