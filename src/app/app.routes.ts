import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./menu/menu.routes').then(m => m.MENU_ROUTES),
  },
  {
    path: 'cd',
    loadChildren: () => import('./cd/cd.routes').then(m => m.CD_ROUTES),
  },
  {
    path: 'find',
    loadChildren: () => import('./find/find.routes').then(m => m.FIND_ROUTES),
  },
  {
    path: 'host',
    loadChildren: () => import('./host/host.routes').then(m => m.HOST_ROUTES),
  },
  {
    path: 'if',
    loadChildren: () => import('./if/if.routes').then(m => m.IF_ROUTES),
  },
  {
    path: 'nmap',
    loadChildren: () => import('./nmap/nmap.routes').then(m => m.NMAP_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
