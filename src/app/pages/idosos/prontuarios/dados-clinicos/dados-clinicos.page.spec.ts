import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DadosClinicosPage } from './dados-clinicos.page';

describe('DadosClinicosPage', () => {
  let component: DadosClinicosPage;
  let fixture: ComponentFixture<DadosClinicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosClinicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosClinicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
