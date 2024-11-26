import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../../../components/nav/nav.component';

@Component({
  selector: 'app-registeration',
  standalone: true,
  imports: [RouterLink, NavComponent],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {

}
