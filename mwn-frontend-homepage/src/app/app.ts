import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './modules/components/header/header';
import { Footer } from './modules/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'mwn-frontend-homepage';
}
