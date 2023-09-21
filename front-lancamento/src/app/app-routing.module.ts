import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lancamentos', loadChildren: () => import('./lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'pessoas', loadChildren: () => import('./pessoas/pessoas.module').then(m => m.PessoasModule) },
  { path: 'categorias', loadChildren: () => import('./categorias/categorias.module').then(m => m.CategoriasModule) },
  { path: 'upload', loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule) },
  { path: '', redirectTo: '/upload', pathMatch: "full"},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
