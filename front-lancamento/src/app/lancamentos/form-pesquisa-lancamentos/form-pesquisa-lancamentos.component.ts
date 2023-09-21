import { Component, OnInit } from '@angular/core';
import { LancamentosService } from '../lancamentos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
}

@Component({
  selector: 'app-form-pesquisa-lancamentos',
  templateUrl: './form-pesquisa-lancamentos.component.html',
  styleUrls: ['./form-pesquisa-lancamentos.component.scss']
})
export class FormPesquisaLancamentosComponent implements OnInit {

  lancamentos: any[] | undefined;

  descricao: string = '';
  dataVencimentoDe!: Date;
  dataVencimentoAte!: Date;

  constructor(
    private service: LancamentosService,
    private alertModal: AlertModalService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.lancamentos = undefined
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoDe: this.dataVencimentoDe,
      dataVencimentoAte: this.dataVencimentoAte
    }

    console.log(filtro);

    this.service.getLancamentos(filtro).subscribe(
      resposta => {
        this.lancamentos = resposta.content;
      },
      (error) => {
        this.alertModal.showAlertDanger("Erro ao buscar lancamentos.");
        console.error('Erro ao buscar lancamentos: ', error);
      }
    );
  }

}
