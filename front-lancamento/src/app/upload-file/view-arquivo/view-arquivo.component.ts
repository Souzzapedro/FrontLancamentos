import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { UploadFileService } from '../upload-file.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-view-arquivo',
  templateUrl: './view-arquivo.component.html',
  styleUrls: ['./view-arquivo.component.scss']
})
export class ViewArquivoComponent implements OnInit {

  idArquivo: any;
  arquivo: any;
  arquivoView!: Blob;

  constructor(
    private route: ActivatedRoute,
    private service: UploadFileService,
    private alertModal: AlertModalService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.forEach(params => {
      this.idArquivo = params.get('id');
    })

    // JSON
    this.service.getArquivo(this.idArquivo).subscribe(
      resposta => {
        this.arquivo = resposta;
      },
      error => {
        this.alertModal.showAlertDanger('Erro ao buscar arquivo!');
        console.error(error);
      }
    )

    // DADOS VIEW
    this.service.getArquivoView(this.idArquivo).subscribe(
      resposta => {
        this.arquivoView = resposta;
        console.log(resposta);
      },
      error => {
        this.alertModal.showAlertDanger('Erro ao buscar arquivo view!');
        console.error(error);
      }
    )
  }


  isImagem(): boolean {
    return this.arquivoView.type.startsWith('image');
  }

  isPdf(): boolean {
    return this.arquivoView.type.startsWith('application/pdf');
  }

  getImagemSrc(): string {
    const blobUrl = URL.createObjectURL(this.arquivoView);
    return blobUrl;
  }

  getPdfSrc(): string {
    const blobUrl = URL.createObjectURL(this.arquivoView);
    console.log(blobUrl);
    return blobUrl;
  }
}
