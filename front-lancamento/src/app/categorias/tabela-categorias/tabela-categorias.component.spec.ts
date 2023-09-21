import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCategoriasComponent } from './tabela-categorias.component';

describe('TabelaCategoriasComponent', () => {
  let component: TabelaCategoriasComponent;
  let fixture: ComponentFixture<TabelaCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaCategoriasComponent]
    });
    fixture = TestBed.createComponent(TabelaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
