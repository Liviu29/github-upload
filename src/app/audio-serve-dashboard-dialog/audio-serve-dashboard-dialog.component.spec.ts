import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioServeDashboardDialogComponent } from './audio-serve-dashboard-dialog.component';

describe('AudioServeDashboardDialogComponent', () => {
  let component: AudioServeDashboardDialogComponent;
  let fixture: ComponentFixture<AudioServeDashboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioServeDashboardDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioServeDashboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
