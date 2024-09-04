import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import NavbarComponent from './navbar.component';
import FooterComponent from './footer.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <h1>Layout Main</h1>
    <router-outlet />
    <app-footer />
  `,
})
export default class MainComponent {}
