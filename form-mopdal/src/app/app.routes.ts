import { Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'home', component: HomeComponent },
];
