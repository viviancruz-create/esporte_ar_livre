import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menucomponent } from './component/menucomponent/menucomponent';
import { Atletacomponent } from './component/atletacomponent/atletacomponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menucomponent, Atletacomponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('esporte_ar_livre');
}
