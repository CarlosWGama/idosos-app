import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvolucaoPage } from './evolucao.page';

describe('EvolucaoPage', () => {
  let component: EvolucaoPage;
  let fixture: ComponentFixture<EvolucaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvolucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
