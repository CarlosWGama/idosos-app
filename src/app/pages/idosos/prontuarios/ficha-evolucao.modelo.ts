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
 * Classe Generica com as funções basicas de gerenciar Ficha de Evolução
 */
@Injectable()
export abstract class FichaEvolucaoModelo implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  paciente:Paciente;
  evolucao: any = {id:null};
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
    this.evolucao = this.navExtra.get('evolucao', {id: null});
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  /** Realiza a busca das informações do prontuário */
  async ionViewDidEnter() {
    //Ficha de Avaliação
    if (this.evolucao.id == null)
      this.podeEditar(null); //Verifica quem pode editar
    else
      this.podeEditar(this.evolucao.usuario_id); //Verifica quem pode editar
    
    this.form.patchValue(this.evolucao);
  }

  /** Avalia de o usuário pode editar o campo */
  protected podeEditar(donoID: number) {
    const area = this.navExtra.get('area', new Profissao(2), false);

    //É professor ou moderador da area
    this.acessoEdicao = (this.usuario.profissao_id == area.id && (donoID == null || [1,2].includes(this.usuario.nivel_acesso) || donoID == this.usuario.id))
  }

  /** Salva a Ficha de Avaliação/Evolução */
  async salvar() {
    const loading = await this.loadingCtrl.create({message:'Salvando', backdropDismiss: false});
    loading.present();

    let dados = Object.assign(this.evolucao, this.form.value);
    dados.paciente_id = this.paciente.id;
    dados.usuario_id = this.usuario.id;
    console.log(dados);
    
    let retorno;
    if (this.evolucao.id == null)
      retorno = await this.prontuariosSrv.cadastrarEvolucao(dados, this.url);
    else
      retorno = await this.prontuariosSrv.atualizarEvolucao(dados, this.url);
    loading.dismiss();

    if (retorno.sucesso) {
      this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 3000}).then(t => t.present())
      this.location.back()
    } else {
      this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, buttons:['Ok']}).then(t => t.present())
    }

  }

}
