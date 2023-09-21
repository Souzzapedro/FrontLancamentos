import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ViewArquivoComponent } from './view-arquivo/view-arquivo.component';

const routes: Routes = [
  { path: '', component: UploadFileComponent },
  { path: ':id/view', component: ViewArquivoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadFileRoutingModule { }
