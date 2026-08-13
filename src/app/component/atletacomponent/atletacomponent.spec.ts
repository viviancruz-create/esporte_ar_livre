import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atletacomponent } from './atletacomponent';

describe('Atletacomponent', () => {
  let component: Atletacomponent;
  let fixture: ComponentFixture<Atletacomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atletacomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Atletacomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
