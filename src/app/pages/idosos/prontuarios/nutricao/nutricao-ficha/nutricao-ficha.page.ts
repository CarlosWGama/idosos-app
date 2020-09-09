import { Component, OnInit } from '@angular/core';
import { FichaAvaliacaoModelo } from '../../ficha-avaliacao.modelo';
import { Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-nutricao-ficha',
  templateUrl: './nutricao-ficha.page.html',
  styleUrls: ['./nutricao-ficha.page.scss'],
})
export class NutricaoFichaPage extends FichaAvaliacaoModelo implements OnInit {

  mediaMaoDireita = '0';
  mediaMaoEsquerda = '0';

  async ngOnInit() {
    this.form = this.formBuilder.group({
      'id': null,
      'data': [moment().format('YYYY-MM-DD'), Validators.required],

      'diagnostico_clinico': [null],
      'queixas_principais': [null],

      //Mini Mental Test
      'clock_task': [null],
      'barthel': [null],
      'ppt': [null],
      
      //Sinais vitais
      'fc': [null],
      'fr': [null],
      't': [null],
      'pa': [null],
      
      //Nível de Consciência
      'nivel_consciencia': [1],
      
      //Estado Mental
      'estado_mental': [1],
      
      //Sistema Respiratório
      'sistema_respiratorio': [1],
      'ventilado_suporte_o2': [null],
      'ritmo': [1],
      'padrao_muscular_ventilatório': [1],
      'expansibilidade_toracica': [1],
      'expansibilidade_toracica_assimetrica': [null],
      'ausculta': [1],
      'ausculta_mv_diminuido': [null],
      'ausculta_mv_abolido': [null],
      'ruidos_adventicios': [1],
      'tosse': [1],
      'aspecto_secrecao': [null],
      
      //SISTEMA OSTEOMIOARTICULAR
      'sistema_osteomioarticular': [1],
      'forca_muscular': [1],
      'tonus': [1],
      'amplitude_articular_normal': [false],
      'amplitude_articular_diminuida': [false],
      'amplitude_articular_diminuida_obs': [null],
      'amplitude_articular_luxacao': [false],
      'amplitude_articular_luxacao_obs': [null],
      'amplitude_articular_rigidez': [false],
      'amplitude_articular_rigidez_obs': [null],
      'amplitude_articular_fratura': [false],
      'amplitude_articular_fratura_obs': [null],
      'amplitude_articular_desvio': [false],
      'amplitude_articular_desvio_obs': [null],
      
      //Deambutação
      'deambutacao': [1],
      'marcha': [null],
      'equilibrio': [1],
      'equilibrio_anormal': [null],
      'pele': [null],
      'edema_local': [null],
      'edema_tipo': [null],
      'edema_grau': [null],
      'sequelas': [null],
      'aparelho_genitourinario': [1],
      'aparelho_genitourinario_incontigencia': [null],
      'aparelho_genitourinario_funcao_sexual': [null],

      //Final
      'diagnostico_fisioterapeutico': [null],
      'objetivos': [null],
      'conduta': [null]
    })

    await super.ngOnInit(); 
  }

  atualizarMediaForca() {
    this.mediaMaoDireita = ((this.form.get('fp_mao_direita1').value + this.form.get('fp_mao_direita2').value + this.form.get('fp_mao_direita3').value)/3).toFixed(2) 
    this.mediaMaoEsquerda = ((this.form.get('fp_mao_esquerda1').value + this.form.get('fp_mao_esquerda2').value + this.form.get('fp_mao_esquerda3').value)/3).toFixed(2) 
  }

}
