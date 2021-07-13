import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultaClinicaListaPage } from './consulta-clinica-lista.page';

describe('ConsultaClinicaListaPage', () => {
  let component: ConsultaClinicaListaPage;
  let fixture: ComponentFixture<ConsultaClinicaListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaClinicaListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultaClinicaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
