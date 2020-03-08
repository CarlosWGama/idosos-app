import { Component, OnInit } from '@angular/core';
import { CasaDoPobreService } from 'src/app/services/casa-do-pobre.service';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  contatos: Contato[] = []
  constructor(private casaPobreSrv:CasaDoPobreService) { }

  async ngOnInit() {
    this.contatos = await this.casaPobreSrv.contatos();
  }

}
