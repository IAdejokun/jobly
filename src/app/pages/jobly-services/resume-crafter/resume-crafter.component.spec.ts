import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCrafterComponent } from './resume-crafter.component';

describe('ResumeCrafterComponent', () => {
  let component: ResumeCrafterComponent;
  let fixture: ComponentFixture<ResumeCrafterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeCrafterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeCrafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
