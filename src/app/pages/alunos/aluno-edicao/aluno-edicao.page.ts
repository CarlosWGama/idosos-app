import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { ToastController } from '@ionic/angular';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aluno-edicao',
  templateUrl: './aluno-edicao.page.html',
  styleUrls: ['./aluno-edicao.page.scss'],
})
export class AlunoEdicaoPage implements OnInit {

  form:FormGroup;
  foto: string = 'assets/imgs/camera.png';
  aluno: Usuario = null;

  constructor(private formBuilder: FormBuilder, private profSrv:ProfissionalService, private navExtra:NavExtrasService,
              private toastController: ToastController, private router:Router ) { }

  ngOnInit() {    
    this.aluno = this.navExtra.get('aluno', new Usuario());
    if (this.aluno.nivel_acesso == null) this.aluno.nivel_acesso = 2;
    this.form = this.formBuilder.group({
      'nome': [this.aluno.nome, [Validators.required]],
      'senha': [null, (this.aluno.id ? [Validators.minLength(4)] : [Validators.minLength(4), Validators.required])],
      'nivel_acesso': [this.aluno.nivel_acesso],
    })
  }

  /** Salva */
  async salvar() {
    this.aluno = Object.assign(this.aluno, this.form.value);
    
    if (!this.aluno.id) var retorno = await this.profSrv.cadastrarAluno(this.aluno);
    else var retorno = await this.profSrv.atualizarAluno(this.aluno);
    
    if (retorno.sucesso) {
      this.toastController.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.router.navigateByUrl('alunos');
    } else {
      this.toastController.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }


}
