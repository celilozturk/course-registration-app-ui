import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { DefaultLayoutComponent } from './components/pages/layouts/default-layout/default-layout.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { CandidatesComponent } from './components/pages/candidates/candidates.component';
import { EnrollmentsComponent } from './components/pages/enrollments/enrollments.component';
import { CourseDetailComponent } from './components/pages/courses/course-detail/course-detail.component';
import { CourseAddComponent } from './components/pages/courses/course-add/course-add.component';
import { CandidateAddComponent } from './components/pages/candidates/candidate-add/candidate-add.component';
import { CandidateUpdateComponent } from './components/pages/candidates/candidate-update/candidate-update.component';
import { EnrollmentAddComponent } from './components/pages/enrollments/enrollment-add/enrollment-add.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent},
    {
        path:"",
        component:DefaultLayoutComponent, 
        children:[
            { path:"", component:HomeComponent },            
            { path:"courses", component:CoursesComponent },            
            { path:"courses/course-detail/:id", component:CourseDetailComponent },            
            { path:"courses/course-add", component:CourseAddComponent },            
            { path:"candidates", component:CandidatesComponent },            
            { path:"candidates/candidate-add", component:CandidateAddComponent },            
            { path:"candidates/candidate-update/:id", component:CandidateUpdateComponent },            
            { path:"enrollments", component:EnrollmentsComponent },            
            { path:"enrollments/enrollment-add", component:EnrollmentAddComponent },            
            { path:"", component:HomeComponent },            
        ]
    },
    {path:"*", component:NotFoundComponent}
];
