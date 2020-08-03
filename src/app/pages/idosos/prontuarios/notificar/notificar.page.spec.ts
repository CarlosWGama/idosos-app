import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificarPage } from './notificar.page';

describe('NotificarPage', () => {
  let component: NotificarPage;
  let fixture: ComponentFixture<NotificarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
