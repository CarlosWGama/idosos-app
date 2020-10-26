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
      'saude_gastrointestinal': [[]],
      'habito_intestinal_dia':null,
      'habito_intestinal_semana':null,
      'consistencia_fezes':[0], 
      'laxante': [false],
      'apetite': [1],
      'sobra_comida': [0],
      'aversao_alimentar': null, 
      'intolerencia_alimentar': null, 
      'alergia_alimentar': null, 
      'sede': [false],
      'liquidos_diarios': [2],
      'liquido_consumo': [1],
      'suplemento': [false],
      //Antroometria
      'peso_atual': [null], 
      'peso_usual': [null],
      'peso_estimado': [null], 
      'perda_peso': [null],
      'membro_amputado': [[]],
      'segmentacao_amputado':null, 
      'altura':[null],
      'altura_joelho': [null],
      'semi_envergadura': [null],
      'altura_estimada': [null], 
      'imc': [null], 
      'circunferencia_panturrilha': [null], 
      'circunferencia_braco': [null],
      'circunferencia_pulso': [null], 
      'dct': [null],
      'dcse': [null], 
      'circunferencia_muscular_braco':[null],
      'circunferencia_cintura':[null], 
      'circunferencia_cintura_tipo':[1], 
      'marcapasso': [false],
      'edema':[false], 
      'edema_localizacao':null,
      'cacifo': [false],
      'lado_dominante': [1],
      //Avalição força palmar
      'fp_mao_direita1': [0],
      'fp_mao_direita2': [0],
      'fp_mao_direita3': [0],
      'fp_mao_esquerda1': [0],
      'fp_mao_esquerda2': [0],
      'fp_mao_esquerda3': [0],
      //Exame física
      'c_consumo_musculo_temporal': [false],
      'c_consumo_bola_gordurosa': [false],
      'c_arco_zigomatico_aparente': [false],
      'c_depressao_masseter': [false],
      't_clavicula_aparente':[false],
      't_esterno_aparente':[false],
      't_ombros_quadrados':[false],
      'p_proeminência_supra_infra': [false],
      'o_esclerotica': [false],
      'o_mucosa_hipocoradas': [false],
      'o_orbitas_profundas': [false],
      'cf_coloracao_mucosa': [1],
      'ms_edema': [false],
      'mi_edema': [false],
      'mi_joelho_quadrado':[false],
      'pele_manchas':[false],
      'pele_ressecamento':[false],
      'pele_lesoes':[false],
      'pele_turgor':[false],
      'pele_prurido':[false],
      'diagnostico': [null],
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
