import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PublicacionesListaComponent } from './publicaciones-lista.component';

describe('PublicacionesListaComponent', () => {
  let component: PublicacionesListaComponent;
  let fixture: ComponentFixture<PublicacionesListaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PublicacionesListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
