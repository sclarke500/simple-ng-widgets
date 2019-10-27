import { TestBed } from '@angular/core/testing';

import { DialogService } from './dialog.service';

describe('DialogService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });

  it('should register a dialog and generate overlay', () => {
    const service: DialogService = TestBed.get(DialogService);
    let dlg1 = {};
    service.register(dlg1);
    expect(service['dialogs'].length).toBe(1);
    expect(service['dialogs'][0].zIndex).toBe(11);
    expect(service['overlay']).toBeTruthy();
  })

  it('should register 2 dialogs and generate overlay with proper z-indexes', () => {
    const service: DialogService = TestBed.get(DialogService);
    let dlg1 = {};
    let dlg2 = {};
    service.register(dlg1);
    service.register(dlg2);
    expect(service['dialogs'].length).toBe(2);
    expect(service['dialogs'][0].zIndex).toBe(10);
    expect(service['dialogs'][1].zIndex).toBe(12);
    expect(service['overlay']).toBeTruthy();
  })

  it('should unregister dialog and remove overlay', () => {
    const service: DialogService = TestBed.get(DialogService);
    let dlg1 = {};
    service.register(dlg1);
    service.unregister(dlg1);
    expect(service['dialogs'].length).toBe(0);
    expect(service['overlay']).toBeFalsy();
  })

});
