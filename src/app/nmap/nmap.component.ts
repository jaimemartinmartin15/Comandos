import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeModule } from '../components/terminal-code/terminal-code.module';
import { ImageFullScreenModule } from '../directives/image-full-screen/image-full-screen.module';

@Component({
  selector: 'app-nmap',
  standalone: true,
  imports: [CommonModule, TerminalCodeModule, ImageFullScreenModule],
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.scss'],
})
export class NmapComponent {}
