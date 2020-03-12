import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProntuariosPage } from './prontuarios.page';

describe('ProntuariosPage', () => {
  let component: ProntuariosPage;
  let fixture: ComponentFixture<ProntuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProntuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProntuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
