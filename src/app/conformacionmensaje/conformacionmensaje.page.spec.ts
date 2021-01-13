import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConformacionmensajePage } from './conformacionmensaje.page';

describe('ConformacionmensajePage', () => {
  let component: ConformacionmensajePage;
  let fixture: ComponentFixture<ConformacionmensajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformacionmensajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConformacionmensajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
