import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { FormControl } from '@angular/forms';
import {
  EMPTY,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.scss'],
})
export class TabelaPessoasComponent implements OnInit {

  formPesquisa = new FormControl();
  pessoas: any;

  statusPessoaSelecionada!: any;

  constructor(
    private service: PessoasService,
    private alertModal: AlertModalService
  ) {}

  ngOnInit(): void {
    this.pesquisar();
    this.formPesquisa.valueChanges
      .pipe(
        map((value) => value.trim()),
        filter((value) => value.length > 1),
        debounceTime(250),
        distinctUntilChanged()
      )
      .subscribe(() => this.pesquisar());
  }

  atualizarStatus(id: number, acao: boolean, nome: string) {
    this.service.getStatus(id).subscribe(
      resposta => {
        this.statusPessoaSelecionada = resposta;
      },
      error => {
        this.alertModal.showAlertDanger(`Erro ao buscar status da pessoa de id ${id}.`);
        console.error("Erro ao buscar status: ", error);
      }
    )

    const mensagem = `Tem certeza que deseja ${acao ? 'ativar' : 'desativar'} a pessoa de id ${id} (${nome})`;
    const result$ = this.alertModal.showConfirm("Confirmação", mensagem, "Sim", "Não");

    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.atualizarStatus(id, acao) : EMPTY)
      ).subscribe(
        resposta => {
          this.alertModal.showAlertSuccess(`Status de ${nome} atualizado com sucesso!`);

          const pessoaAtualizada = this.pessoas.find((pessoa: any) => pessoa.id ===  id);
          if(pessoaAtualizada) {
            pessoaAtualizada.ativo = !this.statusPessoaSelecionada;
          }

        },
        error => {
          this.alertModal.showAlertDanger(`Erro ao atualizar status de ${nome}`);
          console.error(error);
        }
      )
  }

  pesquisar() {
    console.log(this.formPesquisa.value);
    this.pessoas = undefined;
    if (this.formPesquisa.value === '' || this.formPesquisa.value === null) {
      this.service.listar().subscribe(
        (pessoas) => {
          this.pessoas = pessoas;
        },
        (error) => {
          this.alertModal.showAlertDanger('Erro ao listar pessoas.');
          console.error('Erro ao listar pessoas: ', error);
        }
      );
    } else {
      this.service
        .getPessoasNome(this.formPesquisa.value.toUpperCase())
        .subscribe(
          (pessoas) => {
            this.pessoas = pessoas;
          },
          (error) => {
            this.alertModal.showAlertDanger('Erro ao pesquisar por pessoas.');
            console.error('Erro ao pesquisar por pessoas: ', error);
          }
        );
    }
  }
}
