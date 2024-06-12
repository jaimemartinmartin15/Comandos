import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageFullScreenModule, TerminalCodeComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-nmap',
  standalone: true,
  imports: [CommonModule, TerminalCodeComponent, ImageFullScreenModule],
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.scss'],
})
export class NmapComponent {}
