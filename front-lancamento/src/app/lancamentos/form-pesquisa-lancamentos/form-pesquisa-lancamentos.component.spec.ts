import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPesquisaLancamentosComponent } from './form-pesquisa-lancamentos.component';

describe('FormPesquisaLancamentosComponent', () => {
  let component: FormPesquisaLancamentosComponent;
  let fixture: ComponentFixture<FormPesquisaLancamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPesquisaLancamentosComponent]
    });
    fixture = TestBed.createComponent(FormPesquisaLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
