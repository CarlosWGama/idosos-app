import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Evento } from 'src/app/models/evento';
import { CasaDoPobreService } from 'src/app/services/casa-do-pobre.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendario-novo',
  templateUrl: './calendario-novo.page.html',
  styleUrls: ['./calendario-novo.page.scss'],
})
export class CalendarioNovoPage implements OnInit {

  form:FormGroup;
  foto: string = 'assets/imgs/camera.png';
  evento: Evento = new Evento();

  constructor(private formBuilder: FormBuilder, private casaSrv:CasaDoPobreService, private toastController: ToastController, private router:Router ) { }

  ngOnInit() {    
    this.form = this.formBuilder.group({
      'descricao': [null, [Validators.required]],
      'recorrente': [false, [Validators.required]],
      'data': [null],
      'observacao': [null],
    })
  }

  /** Salva */
  async salvar() {
    this.evento = Object.assign(this.evento, this.form.value);
    
    const retorno = await this.casaSrv.cadastrarEvento(this.evento);
    
    if (retorno.sucesso) {
      this.toastController.create({message: 'Operação realizada com sucesso', duration: 2000}).then(t => t.present())
      this.router.navigateByUrl('/calendario')
    } else {
      this.toastController.create({message: 'Falha na operação.' + retorno.error, duration: 2000}).then(t => t.present())
    }
  }

}
