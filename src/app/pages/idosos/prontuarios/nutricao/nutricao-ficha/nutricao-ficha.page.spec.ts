import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NutricaoFichaPage } from './nutricao-ficha.page';

describe('NutricaoFichaPage', () => {
  let component: NutricaoFichaPage;
  let fixture: ComponentFixture<NutricaoFichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricaoFichaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NutricaoFichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
