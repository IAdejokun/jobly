import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLetterWriterComponent } from './cover-letter-writer.component';

describe('CoverLetterWriterComponent', () => {
  let component: CoverLetterWriterComponent;
  let fixture: ComponentFixture<CoverLetterWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverLetterWriterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverLetterWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
