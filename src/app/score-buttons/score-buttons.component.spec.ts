import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreButtonsComponent } from './score-buttons.component';

describe('ScoreButtonsComponent', () => {
  let component: ScoreButtonsComponent;
  let fixture: ComponentFixture<ScoreButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoreButtonsComponent]
    });
    fixture = TestBed.createComponent(ScoreButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
