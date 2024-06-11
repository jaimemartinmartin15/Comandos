import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeModule } from '../components/terminal-code/terminal-code.module';
import { ImageFullScreenModule } from '../directives/image-full-screen/image-full-screen.module';

@Component({
  selector: 'app-cd',
  standalone: true,
  imports: [CommonModule, TerminalCodeModule, ImageFullScreenModule],
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss'],
})
export class CdComponent {}
