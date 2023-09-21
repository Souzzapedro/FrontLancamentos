import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { EMPTY, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-tabela-arquivos',
  templateUrl: './tabela-arquivos.component.html',
  styleUrls: ['./tabela-arquivos.component.scss'],
})
export class TabelaArquivosComponent implements OnInit {
  arquivos: any;

  constructor(
    private service: UploadFileService,
    private alertModal: AlertModalService
  ) {}

  ngOnInit(): void {
    this.service.listar().subscribe(
      (resposta) => {
        this.arquivos = resposta;
      },
      (error) => {
        this.alertModal.showAlertDanger('Erro ao buscar arquivos');
        console.log(error);
      }
    );
  }

  deletar(idDelete: number) {
    this.service.delete(idDelete).subscribe(
      (success) => {
        this.alertModal.showAlertSuccess(
          `Arquivo ${idDelete} excluído com sucesso!`
        );
        this.arquivos = this.arquivos.filter(
          (arquivo: any) => arquivo.id !== idDelete
        );
      },
      (error) => {
        this.alertModal.showAlertDanger('Erro ao deletar arquivo!');
        console.error(error);
      }
    );
  }

  onDelete(id: number) {
    const result$ = this.alertModal.showConfirm(
      'Confirmação',
      'Tem certeza que deseja remover o arquivo?'
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
            `Arquivo ${id} excluído com sucesso!`
          );
          this.arquivos = this.arquivos.filter(
            (arquivo: any) => arquivo.id !== id
          );
        },
        (error) => {
          this.alertModal.showAlertDanger('Erro ao deletar arquivo!');
          console.error(error);
        }
      );
  }

  onDownload(id: number, nome: string) {
    this.service.getArquivoView(id)
      .subscribe((res: any) => {
        const file = new Blob([res], {
          type: res.type
        });

        const blob = window.URL.createObjectURL(file);

        const link = document.createElement('a');
        link.href = blob;
        link.download = nome;

        link.click();

        window.URL.revokeObjectURL(blob);
        link.remove();
      })
  }
}
