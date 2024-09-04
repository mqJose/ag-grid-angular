import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/guards/auth.guards';

export const routes: Routes = [{

  // rutas publicas
  path: '', redirectTo: 'auth', pathMatch: 'full'
}, {
  path: 'auth',
  canActivate: [publicGuard],
  loadComponent: () => import('./shared/ui/layouts/public/public.component'),
  children: [
    {
      path: 'login',
      loadComponent: () => import('./auth/features/log-in/log-in.component'),
    },
    {
      path: 'signup',
      loadComponent: () => import('./auth/features/sign-up/sign-up.component'),
    },
    {
      path: '**',
      redirectTo: 'login',
    },
  ],
}, {

  // rutas privadas
  path: '',
  canActivate: [privateGuard],
  loadComponent: () => import('./shared/ui/layouts/main/main.component'),
  children: [{
      path: 'dashboard',
      loadComponent: () => import('./dashboard/dashboard.component'),
    },
    {
      path: 'products',
      loadChildren: () => import('./pages/products/features/product.routes'),
    },
    {
      path: 'clients',
      loadChildren: () => import('./pages/clients/features/client.routes'),
    },
    {
      path: '**',
      redirectTo: 'dashboard',
    },
  ],
}
];
