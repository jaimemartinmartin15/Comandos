import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./menu/menu.routes').then(m => m.MENU_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./commands-layout/commands-layout.routes').then(m => m.COMMANDS_LAYOUT_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
