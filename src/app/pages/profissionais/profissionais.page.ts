import { Component, OnInit } from '@angular/core';
import { ProfissionalService } from 'src/app/services/profissional.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.page.html',
  styleUrls: ['./profissionais.page.scss'],
})
export class ProfissionaisPage implements OnInit {

  profissionais: Usuario[] = []
  constructor(private profissionaisSrv: ProfissionalService) { }

  async ngOnInit() {
    this.profissionais = await this.profissionaisSrv.getEquipeProfissional(); 
  }

}
