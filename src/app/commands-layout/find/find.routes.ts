import { Route } from "@angular/router";
import { FindComponent } from "./find.component";

export const FIND_ROUTES: Route[] = [
  {
    path: '',
    component: FindComponent,
    title: 'Find',
    data: {
      metaTags: {
        description: 'Aprende a usar el comando find y saca todo su potencial.',
        keywords: ['bash', 'comandos', 'find'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '27 de junio de 2023',
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];