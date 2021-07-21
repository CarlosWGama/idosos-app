import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstoquesPage } from './estoques.page';

describe('EstoquesPage', () => {
  let component: EstoquesPage;
  let fixture: ComponentFixture<EstoquesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstoquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstoquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
