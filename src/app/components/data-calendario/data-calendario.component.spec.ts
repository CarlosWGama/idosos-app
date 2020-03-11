import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DataCalendarioComponent } from './data-calendario.component';

describe('DataCalendarioComponent', () => {
  let component: DataCalendarioComponent;
  let fixture: ComponentFixture<DataCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCalendarioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DataCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
