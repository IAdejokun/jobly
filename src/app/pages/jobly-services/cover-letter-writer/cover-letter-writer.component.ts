import { ChangeDetectorRef, Component } from '@angular/core';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-cover-letter-writer',
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule],
  templateUrl: './cover-letter-writer.component.html',
  styleUrl: './cover-letter-writer.component.css'
})
export class CoverLetterWriterComponent {


  constructor(private cd: ChangeDetectorRef){}

  coverLetterFormData = new FormGroup({
      jobDescription: new FormControl('', [Validators.required, Validators.minLength(10)]),
      resumeSelecter: new FormControl('', [Validators.required]),
      additionalInfo: new FormControl('', [Validators.minLength(10)])
  })


  

  onLetterSubmit(){}

}
