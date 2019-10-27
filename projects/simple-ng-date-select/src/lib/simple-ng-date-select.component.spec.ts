import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgDateSelectComponent } from './simple-ng-date-select.component';

describe('SimpleNgDateSelectComponent', () => {
  let component: SimpleNgDateSelectComponent;
  let fixture: ComponentFixture<SimpleNgDateSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNgDateSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgDateSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
