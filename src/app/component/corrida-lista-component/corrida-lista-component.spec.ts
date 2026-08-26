import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaListaComponent } from './corrida-lista-component';
import { CorridaService } from '../../service/corrida-service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('CorridaListaComponent', () => {
  let component: CorridaListaComponent;
  let fixture: ComponentFixture<CorridaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorridaListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorridaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
