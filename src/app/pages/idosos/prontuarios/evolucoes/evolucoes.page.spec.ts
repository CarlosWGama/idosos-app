import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvolucoesPage } from './evolucoes.page';

describe('EvolucoesPage', () => {
  let component: EvolucoesPage;
  let fixture: ComponentFixture<EvolucoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvolucoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvolucoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
