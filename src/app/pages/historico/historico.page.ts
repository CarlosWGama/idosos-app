import { Component, OnInit } from '@angular/core';
import { CasaDoPobreService } from 'src/app/services/casa-do-pobre.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  texto = ''

  constructor(private casaDoPobreSrv:CasaDoPobreService) { }

  async ngOnInit() {
    this.texto = await this.casaDoPobreSrv.historico();
  }

}
