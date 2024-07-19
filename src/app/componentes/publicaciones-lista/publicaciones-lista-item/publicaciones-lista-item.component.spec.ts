import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PublicacionesListaItemComponent } from './publicaciones-lista-item.component';

describe('PublicacionesListaItemComponent', () => {
  let component: PublicacionesListaItemComponent;
  let fixture: ComponentFixture<PublicacionesListaItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [PublicacionesListaItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacionesListaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
