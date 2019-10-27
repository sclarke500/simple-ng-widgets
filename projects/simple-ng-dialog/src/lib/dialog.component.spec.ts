import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DialogService } from './dialog.service';
import { OverlayService } from './overlay.service';

import { DialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let service: DialogService;
  let overlayService: OverlayService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogComponent ],
      providers: [ DialogService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(DialogService);
    overlayService.defaultCaption = 'default caption';
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have defaults', () => {
    const captionEl = fixture.debugElement.query(By.css('.caption')).nativeElement;
    expect(captionEl.innerText).toEqual('default caption');
    const deleteButton = fixture.debugElement.query(By.css('button.delete'));
    expect(deleteButton).toBeFalsy();
    const cancelButton = fixture.debugElement.query(By.css('button.cancel'));
    expect(cancelButton).toBeTruthy();
    const buttonsDiv = fixture.debugElement.query(By.css('.buttons'));
    expect(buttonsDiv).toBeTruthy();
  });

  it('should use specified caption', () => {
    component.caption = 'test caption';
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('.caption')).nativeElement;
    expect(el.innerText).toEqual('test caption');
  });

  it('should show delete button', () => {
    component.showDelete = true;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('button.delete')).nativeElement;
    expect(el).toBeTruthy(); // to exist
  });

  it('should hide cancel button', () => {
    component.showCancel = false;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('button.cancel'));
    expect(el).toBeFalsy(); 
  });

});
