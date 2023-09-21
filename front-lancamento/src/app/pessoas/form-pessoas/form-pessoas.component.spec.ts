import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPessoasComponent } from './form-pessoas.component';

describe('FormPessoasComponent', () => {
  let component: FormPessoasComponent;
  let fixture: ComponentFixture<FormPessoasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPessoasComponent]
    });
    fixture = TestBed.createComponent(FormPessoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
