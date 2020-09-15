import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioServeDashboardComponent } from './audio-serve-dashboard.component';

describe('AudioServeDashboardComponent', () => {
  let component: AudioServeDashboardComponent;
  let fixture: ComponentFixture<AudioServeDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioServeDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioServeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
