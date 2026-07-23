import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente correcto
import { PublicFooterComponent } from './public-footer';

describe('PublicFooterComponent', () => {

  // Declaramos el componente
  let component: PublicFooterComponent;

  // Declaramos el fixture
  let fixture: ComponentFixture<PublicFooterComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      // Importamos el componente standalone
      imports: [PublicFooterComponent],

    }).compileComponents();

    // Creamos el componente
    fixture = TestBed.createComponent(PublicFooterComponent);

    // Obtenemos la instancia
    component = fixture.componentInstance;

    // Detectamos cambios
    fixture.detectChanges();

  });

  // Verificamos que el componente exista
  it('should create', () => {

    expect(component).toBeTruthy();

  });

});
