import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { EMPTY, switchMap, take } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-tabela-categorias',
  templateUrl: './tabela-categorias.component.html',
  styleUrls: ['./tabela-categorias.component.scss']
})
export class TabelaCategoriasComponent {

  @Input() categorias: any;
  statusCategoriaSelecionada!: boolean;

  deleteModelRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: CategoriaService,
    private alertModal: AlertModalService,
  ) {}

  atualizarStatus(id: number) {
    this.service.getStatus(id).subscribe(
      resposta => {
        this.statusCategoriaSelecionada = resposta;
      },
      error => {
        this.alertModal.showAlertDanger(`Erro ao buscar status da categoria de id ${id}.`);
        console.error("Erro ao buscar status: ", error);
      }
    )

    let acao = this.statusCategoriaSelecionada ? "desativa" : "ativa";
    const result$ = this.alertModal.showConfirm("Confirmação", `Tem certeza que deseja ${acao}r a categoria de id ${id}?`, "Sim");

    result$.asObservable()   // se confirmou
      .pipe(
        take(1),
        switchMap(result => result ? this.service.altualizarStatus(id, !this.statusCategoriaSelecionada) : EMPTY)
      ).subscribe(
        success => {
          this.alertModal.showAlertSuccess(`Categoria ${id} ${acao}da com sucesso!`);

          const categoriaAtualizada = this.categorias.find((categoria: any) => categoria.id ===  id);
          if(categoriaAtualizada) {
            categoriaAtualizada.ativo = !this.statusCategoriaSelecionada;
          }

        },
        error => {
          this.alertModal.showAlertDanger('Erro ao atualizar status!');
          console.error(error);
        }
      );
  }
}
