import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPesquisaCategoriasComponent } from './form-pesquisa-categorias.component';

describe('FormPesquisaCategoriasComponent', () => {
  let component: FormPesquisaCategoriasComponent;
  let fixture: ComponentFixture<FormPesquisaCategoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPesquisaCategoriasComponent]
    });
    fixture = TestBed.createComponent(FormPesquisaCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
