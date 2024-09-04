import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./client-list/client-list.component'),
  },
  {
    path: 'client/:id',
    loadComponent: () => import('./client-detail/client-detail.component'),
  },
] as Routes;
