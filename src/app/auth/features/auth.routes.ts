import { Routes } from '@angular/router';

export default [{
  path: '', redirectTo: 'login', pathMatch: 'full'
}, {
  path: 'login',
  loadComponent: () => import('./log-in/log-in.component'),
}, {
  path: 'signup',
  loadComponent: () => import('./sign-up/sign-up.component'),
},
] as Routes;
