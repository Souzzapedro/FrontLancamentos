import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, ViewChild } from '@angular/core';
import { LancamentosService } from 'src/app/lancamentos/lancamentos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { EMPTY, switchMap, take } from 'rxjs';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { PessoasService } from 'src/app/pessoas/pessoas.service';

@Component({
  selector: 'app-tabela-lancamentos',
  templateUrl: './tabela-lancamentos.component.html',
  styleUrls: ['./tabela-lancamentos.component.scss'],
})
export class TabelaLancamentosComponent {
  @Input() lancamentos: any;

  deleteModelRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: LancamentosService,
    private servicePessoa: PessoasService,
    private serviceCategoria: CategoriaService,
    private alertModal: AlertModalService,
    private router: Router
  ) {}

  deletar(idDelete: number) {
    this.service.delete(idDelete).subscribe(
      (success) => {
        this.alertModal.showAlertSuccess(
          `Lançamento ${idDelete} excluído com sucesso!`
        );
        this.lancamentos = this.lancamentos.filter(
          (lancamento: any) => lancamento.id !== idDelete
        );
      },
      (error) => {
        this.alertModal.showAlertDanger('Erro ao deletar lançamento!');
        console.error(error);
      }
    );
  }

  onDelete(id: number) {
    const result$ = this.alertModal.showConfirm(
      'Confirmação',
      'Tem certeza que deseja remover o lançamento?'
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) => (result ? this.service.delete(id) : EMPTY))
      )
      .subscribe(
        (success) => {
          this.alertModal.showAlertSuccess(
            `Lançamento ${id} excluído com sucesso!`
          );
          this.lancamentos = this.lancamentos.filter(
            (lancamento: any) => lancamento.id !== id
          );
        },
        (error) => {
          this.alertModal.showAlertDanger('Erro ao deletar lançamento!');
          console.error(error);
        }
      );
  }

  onEdit(idLancamento: number, idPessoa: number, idCategoria: number) {
    this.service.getLancamentoById(idLancamento).subscribe(
      (lancamento) => {
        if (lancamento.pessoa.ativo && lancamento.categoria.ativo) {
          this.router.navigate([`/lancamentos/${idLancamento}/editar`]);
        } else {
          if (!lancamento.pessoa.ativo) {
            const result$ = this.alertModal.showConfirm(
              'Confirmação',
              `A pessoa do lançamento está inativa, deseja habilitar '${lancamento.pessoa.nome}' ou trocar a pessoa do lançamento ?`,
              `Ativar ${lancamento.pessoa.nome}`,
              'Trocar pessoa do lançamento'
            );
            result$
              .asObservable()
              .pipe(take(1))
              .subscribe(
                (resposta) => {
                  if (resposta) {
                    this.servicePessoa
                      .atualizarStatus(idPessoa, true)
                      .subscribe((resposta) => {
                        this.alertModal.showAlertSuccess(
                          `Pessoa '${lancamento.pessoa.nome}' ativada com sucesso!"`
                        );
                        this.verificarCategoria(idLancamento, idCategoria);
                      });
                  } else {
                    this.verificarCategoria(idLancamento, idCategoria);
                  }
                },
                (error) => {
                  console.error(
                    'Erro na confirmação de alteração de status pessoa ' + error
                  );
                }
              );
          } else {
            this.verificarCategoria(idLancamento, idCategoria);
          }
        }
      },
      (error) => {
        console.error('Erro ao buscar status da pessoa para edição.');
      }
    );
  }

  verificarCategoria(idLancamento: number, idCategoria: number) {
    this.serviceCategoria.getCategoriaById(idCategoria).subscribe(
      (categoria) => {
        if (categoria.ativo) {
          this.router.navigate([`/lancamentos/${idLancamento}/editar`]);
        } else {
          const result$ = this.alertModal.showConfirm(
            'Confirmação',
            `A categoria do lançamento está inativa deseja habilitar '${categoria.nome}' ou trocar a categoria do lançamento ?`,
            `Ativar ${categoria.nome}`,
            'Trocar categoria do lançamento'
          );
          result$
            .asObservable()
            .pipe(take(1))
            .subscribe(
              (resposta) => {
                if (resposta) {
                  this.serviceCategoria
                    .altualizarStatus(idCategoria, true)
                    .subscribe((resposta) => {
                      this.alertModal.showAlertSuccess(
                        `Categoria '${categoria.nome}' ativada com sucesso!"`
                      );
                      setTimeout(() => {
                        this.router.navigate([
                          `/lancamentos/${idLancamento}/editar`,
                        ]);
                      }, 3000);
                    });
                } else {
                  this.router.navigate([`/lancamentos/${idLancamento}/editar`]);
                }
              },
              (error) => {}
            );
        }
      },
      (error) => {
        console.error('Erro ao buscar status da categoria para edição.');
      }
    );
  }
}
