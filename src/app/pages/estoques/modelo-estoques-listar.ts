import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from '../../models/usuario';
import { EstoqueExtraService } from '../../services/estoque-extra.service';
import { NavExtrasService } from '../../services/nav-extras.service';
import { UsuariosService } from '../../services/usuarios.service';

@Injectable()
export abstract class ModeloEstoqueListarPage implements OnInit {

  farmaciaID: number = 7;
  tipoProduto: 'remedios'|'materiais' = 'remedios';
  podeEditar: boolean;
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
    await this.usuarioSrv.initialize();
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.podeEditar = (this.usuario.profissao_id == this.farmaciaID); //Apenas profissionais da area podem adicionar novos produtos
    console.log('Pode editar:', this.podeEditar)
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
      const toast = await this.toastController.create({message: 'Não há mais produto', duration: 2000});
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

  // Remove um produto
  async remover(produto) {
    this.alertController.create({
      message: `Deseja realmente remover o remédio ${produto.nome}?`,
      buttons: [
        {text:'Cancelar'},
        {text:'Confirmar', handler: async () => {
          const resultado = await this.estoqueSrv.remover(produto.id, this.tipoProduto);
          if (resultado.sucesso) {
            this.toastController.create({message:'Operação realizada com sucesso', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          } else {
            this.toastController.create({message:'Não foi possível completar a ação', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          }

          const index = this.produtos.indexOf(produto);
          this.produtos.splice(index, 1);

        }}
      ]
    }).then(a => a.present())
  }
}
