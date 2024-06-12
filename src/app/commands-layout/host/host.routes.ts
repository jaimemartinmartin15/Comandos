import { Route } from "@angular/router";
import { HostComponent } from "./host.component";

export const HOST_ROUTES: Route[] = [
  {
    path: '',
    component: HostComponent,
    title: 'host',
    data: {
      metaTags: {
        description: 'Aprende a usar el comando host para realizar consultas al servicio de nombres de dominio.',
        keywords: ['bash', 'comandos', 'dns', 'host'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '15 de noviembre de 2023',
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];