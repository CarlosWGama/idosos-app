import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdosoIdentificacaoPage } from './idoso-identificacao.page';

describe('IdosoIdentificacaoPage', () => {
  let component: IdosoIdentificacaoPage;
  let fixture: ComponentFixture<IdosoIdentificacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdosoIdentificacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdosoIdentificacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
