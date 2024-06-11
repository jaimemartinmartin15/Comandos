import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./menu/menu.routes').then(m => m.MENU_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./commands-layout-page/commands-layout-page.routes').then(m => m.COMMANDS_LAYOUT_PAGE_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
