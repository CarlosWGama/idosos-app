import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController, ToastController } from '@ionic/angular';
import { Paciente } from '../../../../../models/paciente';
import { Usuario } from '../../../../../models/usuario';
import { ExamesLaboratoriaisService } from '../../../../../services/exames-laboratoriais.service';
import { NavExtrasService } from '../../../../../services/nav-extras.service';
import { UsuariosService } from '../../../../../services/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  
  paciente: Paciente;
  podeAdicionar: boolean;
  exames: any[] = [];
  usuario: Usuario = new Usuario();
  @ViewChild('ionItemSliding', {static: false})
  ionItemSliding: IonItemSliding;
  
  constructor(private router:Router,
             private navExtra:NavExtrasService, 
             private examesSrv: ExamesLaboratoriaisService,
             private usuarioSrv: UsuariosService, 
             private toastController: ToastController,
             private loadingController: LoadingController,
             private alertController: AlertController) { }

  async ngOnInit() {
    this.paciente = this.navExtra.get('paciente', new Paciente(), false);
    this.usuario = this.usuarioSrv.usuarioLogado;
    this.podeAdicionar = (this.usuario.nivel_acesso == 1); //Apenas profissionais da area podem adicionar novas evoluções 
  }
  
  async ionViewDidEnter() {
    const loading = await this.loadingController.create({message: 'Buscando', backdropDismiss: false});
    loading.present();
    this.exames = await this.examesSrv.buscar(this.paciente.id)
    loading.dismiss();
    
    console.log(this.exames);
  }

  /** Adiciona um novo exame */
  novo() {
    this.router.navigateByUrl(`/prontuarios/exames-laboratoriais/visualizar`);
  }
  
  /** Abre um exame */
  abrir(exame) {
    this.navExtra.set('exame', exame);
    this.router.navigateByUrl(`/prontuarios/exames-laboratoriais/visualizar`);
  }

  /** Abre um exame */
  async remover(exame) {
    this.alertController.create({
      header: 'Remover exame #'+exame.id,
      message: 'Deseja realmente remover esse exame?',
      buttons: [
        'Cancelar',
        {text:'Confirmar', handler: async() => {
          const resultado = await this.examesSrv.excluir(exame.id);
          if (resultado.sucesso) {
            this.toastController.create({message:'Operação realizada com sucesso', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
            const index = this.exames.indexOf(exame);
            this.exames.splice(index, 1);
          } else {
            this.toastController.create({message:'Não foi possível completar a ação', duration: 3000}).then(t=>t.present());
            this.ionItemSliding.closeOpened();
          }

        }}
      ]     
    }).then(a => a.present())
  }
}
