import { Component, OnInit } from '@angular/core';
import { Profissao } from 'src/app/models/profissao';
import { Router } from '@angular/router';
import { NavExtrasService } from 'src/app/services/nav-extras.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Medicamento } from 'src/app/models/medicamento';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Paciente } from 'src/app/models/paciente';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  area: Profissao;
  medicamentos: Medicamento[] = [];
  usuario: Usuario = new Usuario();
  podeAdicionar: boolean = false;
  paciente: Paciente;
  ativo: boolean = true;
  constructor(private router:Router, private navExtra:NavExtrasService, 
            private toastCtrl:ToastController, private alertController: AlertController,
            private medicamentosSrv:MedicamentosService, private usuariosSrv: UsuariosService) { }

  async ngOnInit() {
    this.ativo = (this.router.url == '/prontuarios/medicamentos/ativo');
    this.usuario = this.usuariosSrv.usuarioLogado;
    this.area = this.navExtra.get('area', new Profissao(1, 'Nutrição', 'nutricao'), false);
  }
  
  async ionViewDidEnter() {
    this.podeAdicionar = (this.usuario.profissao_id == this.area.id && this.usuario.nivel_acesso == 1);
    this.paciente = this.navExtra.get('paciente', new Paciente(1), false);
    this.buscarMedicamentos();
  }

  private async buscarMedicamentos() {
    if (this.ativo)
      this.medicamentos = await this.medicamentosSrv.buscarAtivos(this.paciente.id, this.area.id);
    else
      this.medicamentos = await this.medicamentosSrv.buscarInativos(this.paciente.id, this.area.id);
  }

  /** Cria um novo medicamento */
  novo () {
    this.router.navigateByUrl(`/prontuarios/medicamentos/edicao`)
  }

  /** Abre a ficha de avaliação */
  abrir(medicamento:Medicamento) {
    this.navExtra.set('medicamento', medicamento);
    this.router.navigateByUrl(`/prontuarios/medicamentos/edicao`)
  }

  /** Cria um novo medicamento */
  async desativar(medicamento:Medicamento) {
    this.alertController.create({
      header: 'Desativar Medicamento',
      message: `Deseja realmente desativar ${medicamento.descricao}?`,
      buttons: [
        'Cancelar',
        {text: 'Confirmar', handler: async () => {
          const resposta = await this.medicamentosSrv.desativarMedicamento(medicamento.id);
          
          if (resposta.sucesso) {
            await this.buscarMedicamentos();
            this.toastCtrl.create({message: 'Medicamento desativado', duration: 3000}).then(t => t.present());
          } else
            this.toastCtrl.create({message: 'Falha ao salvar a informação', duration: 3000}).then(t => t.present());
        }}
      ] 
    }).then(a => a.present())
   
  }
  
  /** Ativa um medicamento */
  async ativar(medicamento:Medicamento) {
    this.alertController.create({
      header: 'Ativar Medicamento',
      message: `Deseja realmente ativar ${medicamento.descricao}?`,
      buttons: [
        'Cancelar',
        {text: 'Confirmar', handler: async () => {
          const resposta = await this.medicamentosSrv.ativarMedicamento(medicamento.id);
          
          if (resposta.sucesso) {
            await this.buscarMedicamentos();
            this.toastCtrl.create({message: 'Medicamento ativado', duration: 3000}).then(t => t.present());
          } else
            this.toastCtrl.create({message: 'Falha ao salvar a informação', duration: 3000}).then(t => t.present());
        }}
      ] 
    }).then(a => a.present())


  }
  
  /** Remove um medicamento */
  async excluir(medicamento:Medicamento) {
    this.alertController.create({
      header: 'Excluir Medicamento',
      message: `Deseja realmente excluir ${medicamento.descricao}?`,
      buttons: [
        'Cancelar',
        {text: 'Confirmar', handler: async () => {
          const resposta = await this.medicamentosSrv.excluir(medicamento);
          if (resposta.sucesso) {
            await this.buscarMedicamentos();
            this.toastCtrl.create({message: 'Medicamento excluido', duration: 3000}).then(t => t.present());
          } else
            this.toastCtrl.create({message: 'Falha ao salvar a informação', duration: 3000}).then(t => t.present());
        }}
      ] 
    }).then(a => a.present())
  
  }
}
