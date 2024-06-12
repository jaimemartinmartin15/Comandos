import { Route } from "@angular/router";
import { CdComponent } from "./cd.component";

export const CD_ROUTES: Route[] = [
  {
    path: '',
    component: CdComponent,
    title: 'cd',
    data: {
      metaTags: {
        description: 'Aprende a usar el comando cd para moverte por el sistema de ficheros en tu terminal.',
        keywords: ['bash', 'comandos', 'cambiar directorio', 'cd'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '4 de noviembre de 2023',
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];