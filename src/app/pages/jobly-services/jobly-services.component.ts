import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-jobly-services',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgIf],
  templateUrl: './jobly-services.component.html',
  styleUrl: './jobly-services.component.css'
})
export class JoblyServicesComponent {

  isRootRoute = true;

  constructor(private route:Router){
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        this.isRootRoute = event.url === "/jobly"
      }
    })

  }

}
