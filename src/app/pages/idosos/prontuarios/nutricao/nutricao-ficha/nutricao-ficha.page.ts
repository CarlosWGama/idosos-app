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

  mediaMaoDireita = 0;
  mediaMaoEsquerda = 0;

  async ngOnInit() {
    this.url = 'nutricao';
    console.log(moment().format('YYYY-MM-DD'));
    this.form = this.formBuilder.group({
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
      'peso_atual': [null, Validators.required], 
      'peso_usual': [null, Validators.required],
      'peso_estimado': [null, Validators.required], 
      'perda_peso': [null, Validators.required],
      'membro_amputado': [[]],
      'segmentacao_amputado':null, 
      'altura':[null, Validators.required],
      'altura_joelho': [null, Validators.required],
      'semi_envergadura': [null, Validators.required],
      'altura_estimada': [null, Validators.required], 
      'imc': [null, Validators.required], 
      'circunferencia_panturrilha': [null, Validators.required], 
      'circunferencia_braco': [null, Validators.required],
      'circunferencia_pulso': [null, Validators.required], 
      'dct': [null, Validators.required],
      'dcse': [null, Validators.required], 
      'circunferencia_muscular_braco':[null, Validators.required],
      'circunferencia_cintura':[null, Validators.required], 
      'circunferencia_cintura_tipo':[1, Validators.required], 
      'marcapasso': [false, Validators.required],
      'edema':[false, Validators.required], 
      'edema_localizacao':null,
      'cacifo': [false, Validators.required],
      'lado_dominante': [1, Validators.required],
      //Avalição força palmar
      'fp_mao_direita1': [0, Validators.required],
      'fp_mao_direita2': [0, Validators.required],
      'fp_mao_direita3': [0, Validators.required],
      'fp_mao_esquerda1': [0, Validators.required],
      'fp_mao_esquerda2': [0, Validators.required],
      'fp_mao_esquerda3': [0, Validators.required],
      //Exame física
      'c_consumo_musculo_temporal': [false, Validators.required],
      'c_consumo_bola_gordurosa': [false, Validators.required],
      'c_arco_zigomatico_aparente': [false, Validators.required],
      'c_depressao_masseter': [false, Validators.required],
      't_clavicula_aparente':[false, Validators.required],
      't_esterno_aparente':[false, Validators.required],
      't_ombros_quadrados':[false, Validators.required],
      'p_proeminência_supra_infra': [false, Validators.required],
      'o_esclerotica': [false, Validators.required],
      'o_mucosa_hipocoradas': [false, Validators.required],
      'o_orbitas_profundas': [false, Validators.required],
      'cf_coloracao_mucosa': [1, Validators.required],
      'ms_edema': [false, Validators.required],
      'mi_edema': [false, Validators.required],
      'mi_joelho_quadrado':[false, Validators.required],
      'pele_manchas':[false, Validators.required],
      'pele_ressecamento':[false, Validators.required],
      'pele_lesoes':[false, Validators.required],
      'pele_turgor':[false, Validators.required],
      'pele_prurido':[false, Validators.required],
      'diagnostico': [null, Validators.required],
      'objetivos': [null, Validators.required],
      'conduta': [null, Validators.required]
    })

    await super.ngOnInit(); 
  }

  atualizarMediaForca() {
    this.mediaMaoDireita = ((this.form.get('fp_mao_direita1').value + this.form.get('fp_mao_direita2').value + this.form.get('fp_mao_direita3').value)/3).toFixed(2) 
    this.mediaMaoEsquerda = ((this.form.get('fp_mao_esquerda1').value + this.form.get('fp_mao_esquerda2').value + this.form.get('fp_mao_esquerda3').value)/3).toFixed(2) 
  }

}
