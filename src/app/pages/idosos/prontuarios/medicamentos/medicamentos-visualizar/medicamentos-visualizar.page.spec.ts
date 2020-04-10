import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicamentosVisualizarPage } from './medicamentos-visualizar.page';

describe('MedicamentosVisualizarPage', () => {
  let component: MedicamentosVisualizarPage;
  let fixture: ComponentFixture<MedicamentosVisualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosVisualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicamentosVisualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
