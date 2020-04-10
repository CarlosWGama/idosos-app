import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicamentosEdicaoPage } from './medicamentos-edicao.page';

describe('MedicamentosEdicaoPage', () => {
  let component: MedicamentosEdicaoPage;
  let fixture: ComponentFixture<MedicamentosEdicaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentosEdicaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicamentosEdicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
