import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecaoAreaPage } from './selecao-area.page';

describe('SelecaoAreaPage', () => {
  let component: SelecaoAreaPage;
  let fixture: ComponentFixture<SelecaoAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecaoAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecaoAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
