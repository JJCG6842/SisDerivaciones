import { Routes } from '@angular/router';
import DashboardComponent from './pages/dashboard/dashboard.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { TutorComponent } from './pages/tutor/tutor.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>import('./pages/auth/auth.component')
    },
    { path: 'admin-dashboard', component: DashboardComponent },
    { path: 'docente', component: DocenteComponent },
    { path: 'tutor', component: TutorComponent },

//   { path: 'profe-dashboard', component: DashboardComponent },
//   { path: 'tutor-dashboard', component: DashboardComponent },
    // {
    //     path:'dashboard',
    //     loadComponent:() =>import('./pages/dashboard/dashboard.component'),
    //     children:[
    //         {
    //             path:''
    //         }
    //     ]
    // }
];
