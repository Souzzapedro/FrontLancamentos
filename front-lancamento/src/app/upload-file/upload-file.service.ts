import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  API: string = 'http://localhost:8080/arquivos';

  constructor(private http: HttpClient) { }

  upload(files: File[], url: string) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));

    return this.http.post(url, formData, { // dados para a barra de progresso
      observe: 'events',
      reportProgress: true
    });
  }

  getArquivo(id: number) {
    return this.http.get(`${this.API}/${id}`).pipe(take(1));
  }

  getArquivoView(id: number): Observable<Blob> {
    return this.http.get<Blob>(`${this.API}/${id}/view`, {
      responseType: 'blob' as 'json'
    });
  }

  listar() {
    return this.http.get(this.API).pipe(take(1));
  }

  delete(id: number) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

  /*
    UPLOAD DE APENAS 1 ARQUIVO

    upload(file: File, url: string) {

    const formData = new FormData();
    formData.append('file', file, file.name)

    return this.http.post(url, formData, { // dados para a barra de progresso
      observe: 'events',
      reportProgress: true
    });
  } */
}
