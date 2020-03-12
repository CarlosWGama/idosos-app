import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdentificacaoPacientePage } from './identificacao-paciente.page';

describe('IdentificacaoPacientePage', () => {
  let component: IdentificacaoPacientePage;
  let fixture: ComponentFixture<IdentificacaoPacientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacaoPacientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdentificacaoPacientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
