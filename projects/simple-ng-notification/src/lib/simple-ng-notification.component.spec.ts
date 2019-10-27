import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgNotificationComponent } from './simple-ng-notification.component';

describe('SimpleNgNotificationComponent', () => {
  let component: SimpleNgNotificationComponent;
  let fixture: ComponentFixture<SimpleNgNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNgNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
