import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private API = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  listar() {
    return this.http.get<any[]>(`${this.API}/categorias`).pipe(take(1), delay(700));
  }
  getCategoriasNome(nome: string) {
    return this.http.get<any[]>(`${this.API}/categorias/nome/${nome}`).pipe(take(1), delay(700));
  }
  getCategoriaById(id: number) {
    return this.http.get<any>(`${this.API}/categorias/${id}`);
  }
  delete(id: number) {
    return this.http.delete(`${this.API}/categorias/${id}`);
  }


  private createCategoria(categoria: any) {
    return this.http.post(`${this.API}/categorias`, categoria);
  }
  private updateCategoria(categoria: any) {
    return this.http.put(`${this.API}/categorias/${categoria.id}`, categoria);
  }
  save(categoria: any) {
    if(categoria.id) {
      return this.updateCategoria(categoria);
    }else {
      return this.createCategoria(categoria);
    }
  }

  
  altualizarStatus(id: number, acao: boolean) {
    return this.http.put(`${this.API}/categorias/${id}/status`, acao).pipe(take(1));
  }

  getStatus(id: number) {
    return this.http.get<boolean>(`${this.API}/categorias/${id}/status`).pipe(take(1));
  }
}

