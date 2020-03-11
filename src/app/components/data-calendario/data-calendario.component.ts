import { Component, OnInit, Input } from '@angular/core';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'data-calendario',
  templateUrl: './data-calendario.component.html',
  styleUrls: ['./data-calendario.component.scss'],
})
export class DataCalendarioComponent implements OnInit {


  @Input('evento')
  evento: Evento;
  dia = '';
  mes = '';
  ano = ''
  constructor() {
  }

  ngOnInit() {
    [this.dia, this.mes, this.ano] = this.evento.data.split('-').reverse()
    this.ajustaMes()
  }

  /** Retorna o mês formatado */
  ajustaMes() {
    switch(this.mes) {
      case '01': this.mes = 'Jan'; break;
      case '02': this.mes = 'Fev'; break;
      case '03': this.mes = 'Mar'; break;
      case '04': this.mes = 'Abr'; break;
      case '05': this.mes = 'Mai'; break;
      case '06': this.mes = 'Jun'; break;
      case '07': this.mes = 'Jul'; break;
      case '08': this.mes = 'Ago'; break;
      case '09': this.mes = 'Set'; break;
      case '10': this.mes = 'Out'; break;
      case '11': this.mes = 'Nov'; break;
      case '12': this.mes = 'Dez'; break;
    }
  }

}
