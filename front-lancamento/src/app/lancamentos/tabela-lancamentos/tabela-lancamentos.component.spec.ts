import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaLancamentosComponent } from './tabela-lancamentos.component';

describe('TabelaLancamentosComponent', () => {
  let component: TabelaLancamentosComponent;
  let fixture: ComponentFixture<TabelaLancamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaLancamentosComponent]
    });
    fixture = TestBed.createComponent(TabelaLancamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
