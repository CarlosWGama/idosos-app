import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelecionarIdosoPage } from './selecionar-idoso.page';

describe('SelecionarIdosoPage', () => {
  let component: SelecionarIdosoPage;
  let fixture: ComponentFixture<SelecionarIdosoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarIdosoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelecionarIdosoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
