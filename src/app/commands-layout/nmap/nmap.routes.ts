import { Route } from "@angular/router";
import { NmapComponent } from "./nmap.component";

export const NMAP_ROUTES: Route[] = [
  {
    path: '',
    component: NmapComponent,
    title: 'Nmap',
    data: {
      metaTags: {
        description: 'Aprende a usar el comando nmap para escanear redes y puertos.',
        keywords: ['bash', 'comandos', 'nmap', 'escanear', 'redes', 'puertos'],
      },
      headerPrint: {
        author: 'Jaime Martín Martín',
        date: '3 de noviembre de 2023',
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];