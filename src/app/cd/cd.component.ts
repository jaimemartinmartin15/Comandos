import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageFullScreenModule, TerminalCodeComponent } from '@jaimemartinmartin15/jei-devkit-angular-shared';

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [CommonModule, TerminalCodeComponent, ImageFullScreenModule],
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss'],
})
export class CdComponent {}
