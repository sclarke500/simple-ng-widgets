import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgDialogComponent } from './simple-ng-dialog.component';

describe('SimpleNgDialogComponent', () => {
  let component: SimpleNgDialogComponent;
  let fixture: ComponentFixture<SimpleNgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleNgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleNgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
