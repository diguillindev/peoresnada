import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PublicacionesFormularioComponent } from './publicaciones-formulario.component';

describe('PublicacionesFormularioComponent', () => {
  let component: PublicacionesFormularioComponent;
  let fixture: ComponentFixture<PublicacionesFormularioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PublicacionesFormularioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
