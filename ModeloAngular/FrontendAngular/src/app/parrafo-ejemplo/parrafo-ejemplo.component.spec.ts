import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrafoEjemploComponent } from './parrafo-ejemplo.component';

describe('ParrafoEjemploComponent', () => {
  let component: ParrafoEjemploComponent;
  let fixture: ComponentFixture<ParrafoEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParrafoEjemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrafoEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
