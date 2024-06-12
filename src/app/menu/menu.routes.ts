import { Route } from "@angular/router";
import { MenuComponent } from "./menu.component";

export const MENU_ROUTES: Route[] = [
  {
    path: '',
    component: MenuComponent,
    title: 'Lista de comandos',
    data: {
      metaTags: {
        description: 'Aprende como usar comandos para escribir scripts de shell',
        keywords: ['bash', 'comandos', 'shell', 'terminal'],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];