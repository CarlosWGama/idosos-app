import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from '../../models/usuario';
import { EstoqueExtraService } from '../../services/estoque-extra.service';
import { NavExtrasService } from '../../services/nav-extras.service';
import { UsuariosService } from '../../services/usuarios.service';

export abstract class ModeloEstoqueListarPage implements OnInit {

  farmaciaID: number = 7;
  tipoProduto: 'remedios'|'materiais' = 'remedios';
  podeAdicionar: boolean;
  produtos: any[] = [];
  usuario: Usuario = new Usuario();
  @ViewChild('ionItemSliding', {static: false})
  ionItemSliding: IonItemSliding;
  maisProdutos = true;

  inicio = 0;
  limite = 10;

  constructor(protected router:Router,
    protected navExtra:NavExtrasService, 
    protected estoqueSrv:EstoqueExtraService,
    protected usuarioSrv: UsuariosService, 
    protected toastController: ToastController,
    protected loadingController: LoadingController,
    protected alertController: AlertController) { }

  async ngOnInit() {
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.podeAdicionar = (this.usuario.profissao_id == this.farmaciaID); //Apenas profissionais da area podem adicionar novos produtos
  }
  
  async ionViewDidEnter() {
    this.buscarMais();
    console.log(this.produtos);
  }

  /** Busca mais evoluções */
  async buscarMais() {
    const loading = await this.loadingController.create({message: 'Buscando', backdropDismiss: false});
    loading.present();
    const novas = await this.estoqueSrv.buscar(this.tipoProduto, this.inicio, this.limite)
    loading.dismiss();
    
    //Pode ter mais evoluções
    this.maisProdutos = novas.length == this.limite;

    //Encontrou mais evoluções
    if (novas.length > 0) {
      this.inicio += this.limite;
      this.produtos = this.produtos.concat(novas);
    } else {
      const toast = await this.toastController.create({message: 'Não há mais testes de acompanhamentos', duration: 2000});
      toast.present();
    }
  }

  /** Adiciona uma nova evolução */
  nova() {
    this.router.navigateByUrl(`/estoques/${this.tipoProduto}/visualizar`);
  }
  
  /** Abre um produto */
  abrir(produto) {
    this.navExtra.set('produto', produto);
    this.router.navigateByUrl(`/estoques/${this.tipoProduto}/visualizar`);
  }
}
