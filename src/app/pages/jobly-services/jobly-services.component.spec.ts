import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblyServicesComponent } from './jobly-services.component';

describe('JoblyServicesComponent', () => {
  let component: JoblyServicesComponent;
  let fixture: ComponentFixture<JoblyServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoblyServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoblyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
