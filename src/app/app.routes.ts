import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DefaultLayoutComponent } from './components/pages/layouts/default-layout/default-layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CandidatesComponent } from './components/pages/candidates/candidates.component';
import { EnrollmentsComponent } from './components/pages/enrollments/enrollments.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {
        path:"",
        component:DefaultLayoutComponent, 
        children:[
            { path:"", component:HomeComponent },            
            { path:"courses", component:CoursesComponent },            
            { path:"candidates", component:CandidatesComponent },            
            { path:"enrollments", component:EnrollmentsComponent },            
            { path:"", component:HomeComponent },            
        ]
    },
    {path:"*", component:NotFoundComponent}
];
