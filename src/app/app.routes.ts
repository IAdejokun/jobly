import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterationComponent } from './pages/auth/registeration/registeration.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { JoblyServicesComponent } from './pages/jobly-services/jobly-services.component';
import { CoverLetterWriterComponent } from './pages/jobly-services/cover-letter-writer/cover-letter-writer.component';
import { ResumeCrafterComponent } from './pages/jobly-services/resume-crafter/resume-crafter.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'pricing',
        component:PricingComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'auth/registeration',
        component:RegisterationComponent
    },
    {
        path:'auth/login',
        component:LoginComponent
    },
    {
        path:'jobly',
        component:JoblyServicesComponent,
        children: [
            {
                path:'cover-letter',
                component:CoverLetterWriterComponent
            },
            {
                path:'resume-crafter',
                component: ResumeCrafterComponent
            }
        ]
    },
    {
        path:'**',
        component:Error404Component
    }
];
