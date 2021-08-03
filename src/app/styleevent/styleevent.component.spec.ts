import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleeventComponent } from './styleevent.component';

describe('StyleeventComponent', () => {
  let component: StyleeventComponent;
  let fixture: ComponentFixture<StyleeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
