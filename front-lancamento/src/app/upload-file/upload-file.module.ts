import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadFileRoutingModule } from './upload-file-routing.module';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { TabelaArquivosComponent } from './tabela-arquivos/tabela-arquivos.component';
import { ViewArquivoComponent } from './view-arquivo/view-arquivo.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';


@NgModule({
  declarations: [
    UploadFileComponent,
    TabelaArquivosComponent,
    ViewArquivoComponent
  ],
  imports: [
    CommonModule,
    UploadFileRoutingModule,
    TooltipModule.forRoot(),
  ]
})
export class UploadFileModule { }
