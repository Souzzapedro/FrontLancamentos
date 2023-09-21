import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private API = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }


  getPessoasNome(nome: string) {
    return this.http.get<any[]>(`${this.API}/pessoas/nome/${nome}`).pipe(take(1));
  }
  listar() {
    return this.http.get<any[]>(`${this.API}/pessoas`).pipe(take(1), delay(700));
  }




  getPessoaById(id: number) {
    return this.http.get<any>(`${this.API}/pessoas/${id}`);
  }

  private createPessoa(pessoa: any) {
    return this.http.post(`${this.API}/pessoas`, pessoa);
  }
  private updatePessoa(pessoa: any) {
    return this.http.put(`${this.API}/pessoas/${pessoa.id}`, pessoa);
  }
  save(pessoa: any) {
    if(pessoa.id) {
      return this.updatePessoa(pessoa);
    }else {
      return this.createPessoa(pessoa);
    }
  }

  atualizarStatus(id: number, acao: boolean) {
    return this.http.put(`${this.API}/pessoas/${id}/status`, acao).pipe(take(1));
  }
  getStatus(id: number) {
    return this.http.get(`${this.API}/pessoas/${id}/status`).pipe(take(1));
  }
}

