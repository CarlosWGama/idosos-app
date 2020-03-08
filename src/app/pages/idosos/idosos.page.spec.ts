import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdososPage } from './idosos.page';

describe('IdososPage', () => {
  let component: IdososPage;
  let fixture: ComponentFixture<IdososPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdososPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdososPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
