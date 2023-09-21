import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaArquivosComponent } from './tabela-arquivos.component';

describe('TabelaArquivosComponent', () => {
  let component: TabelaArquivosComponent;
  let fixture: ComponentFixture<TabelaArquivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaArquivosComponent]
    });
    fixture = TestBed.createComponent(TabelaArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
