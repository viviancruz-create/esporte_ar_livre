import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCorridaComponent } from './cadastro-corrida-component';

describe('CadastroCorridaComponent', () => {
  let component: CadastroCorridaComponent;
  let fixture: ComponentFixture<CadastroCorridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroCorridaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroCorridaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
