import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { Profissional } from 'src/app/models/profissional';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.page.html',
  styleUrls: ['./profissionais.page.scss'],
})
export class ProfissionaisPage implements OnInit {

  profissionais: Profissional[] = []
  constructor(private profissionaisSrv: ProfissionalService) { }

  async ngOnInit() {
    this.profissionais = await this.profissionaisSrv.getProfissionais(); 
  }

}
