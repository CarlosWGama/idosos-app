import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from '../../models/usuario';
import { EstoqueExtraService } from '../../services/estoque-extra.service';
import { NavExtrasService } from '../../services/nav-extras.service';
import { UsuariosService } from '../../services/usuarios.service';

@Injectable()
export abstract class ModeloEstoqueVisualizarPage implements OnInit {

  form: FormGroup;
  usuario: Usuario;
  produto: any = {id:null};
  acessoEdicao: boolean = true;
  protected id: number = null;
  protected areaID = 7;
  tipoProduto: 'remedios'|'materiais' = 'remedios';
  
  constructor(protected formBuilder: FormBuilder, protected location: Location, protected toastCtrl: ToastController, protected loadingCtrl:LoadingController,
      protected navExtra: NavExtrasService, protected usuarioSrv: UsuariosService, protected estoqueSrv: EstoqueExtraService,
      protected cd: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.usuarioSrv.initialize();
    this.produto = this.navExtra.get('produto', {id: null});
    this.usuario = this.usuarioSrv.usuarioLogado;
  }

  /** Realiza a busca das informações do produto */
  async ionViewDidEnter() {
    this.acessoEdicao = (this.usuario.profissao_id == this.areaID)
    this.form.patchValue(this.produto);
  }


  /** Salva o produto */
  async salvar() {
    const loading = await this.loadingCtrl.create({message:'Salvando', backdropDismiss: false});
    loading.present();
    
    let dados = Object.assign(this.produto, this.form.value);
    
    let retorno;
    if (this.produto.id == null)
      retorno = await this.estoqueSrv.cadastrar(dados, this.tipoProduto);
    else
      retorno = await this.estoqueSrv.atualizar(dados, this.tipoProduto);
    loading.dismiss();

    if (retorno.sucesso) {
      await this.toastCtrl.create({message: 'Operação realizada com sucesso', duration: 3000}).then(t => t.present())
      this.location.back()
    } else {
      await this.toastCtrl.create({message: 'Falha na operação.' + retorno.error, buttons:['Ok']}).then(t => t.present())
    }

  }

}
