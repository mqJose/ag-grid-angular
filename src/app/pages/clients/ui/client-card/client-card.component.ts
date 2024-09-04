import { Component, input, output } from '@angular/core';
import { Client } from '../../data-access/clients.service';

@Component({
  selector: 'app-client-card',
  standalone: true,
  template: `
    <div>
      <h2>{{ client().name }}</h2>

      <p>Price {{ client().price }}</p>

      <button (click)="buyClient()">Buy</button>
    </div>
  `,
})
export default class ClientCardComponent {
  client = input.required<Client>();

  buy = output<Client>();

  buyClient() {
    this.buy.emit(this.client());
  }
}
