import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TerminalCodeModule } from '../components/terminal-code/terminal-code.module';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [CommonModule, TerminalCodeModule],
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
})
export class HostComponent {}
