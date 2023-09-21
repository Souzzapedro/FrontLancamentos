import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArquivoComponent } from './view-arquivo.component';

describe('ViewArquivoComponent', () => {
  let component: ViewArquivoComponent;
  let fixture: ComponentFixture<ViewArquivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewArquivoComponent]
    });
    fixture = TestBed.createComponent(ViewArquivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
