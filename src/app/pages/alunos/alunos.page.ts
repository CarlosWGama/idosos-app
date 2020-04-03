import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.page.html',
  styleUrls: ['./alunos.page.scss'],
})
export class AlunosPage implements OnInit {

  alunos: Usuario[] = []

  constructor(private profSrv:ProfissionalService, private navExtra:NavExtrasService, private router:Router, 
              private toastCtrl:ToastController, private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.alunos = await this.profSrv.getAlunos();
  }

  /** Cadastra um novo aluno */
  novo() { this.router.navigateByUrl('alunos/edicao') }

  /** Abre a tela de edição de aluno   */
  editar(aluno:Usuario) {
    this.navExtra.set('aluno', aluno);
    this.router.navigateByUrl('alunos/edicao')
  }

  /** Remove o usuário */
  async remover(aluno:Usuario) {
    this.alertCtrl.create({
      header: 'Remover aluno',
      message: 'Deseja realmente remover esse aluno?',
      buttons: [
        'Cancelar',
        {text: 'Confirmar', handler: async()=> {      
          await this.profSrv.removerAluno(aluno.id);
          this.alunos = await this.profSrv.getAlunos();
          this.toastCtrl.create({message:'Aluno removido', duration: 3000}).then(t => t.present())
        }}
      ]
    }).then(a => a.present())
    
  }

}
