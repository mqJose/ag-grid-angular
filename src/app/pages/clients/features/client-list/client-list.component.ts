import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Client, ClientService } from '../../data-access/clients.service';
import ClientCardComponent from '../../ui/client-card/client-card.component';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [ClientCardComponent],
  templateUrl: './client-list.component.html',
  styles: ``,
})
export default class ClientListComponent {
  clientService = inject(ClientService);

  clients = toSignal(this.clientService.getClients());

  buy(client: Client) {
    alert(`You bought ${client.name}`);
  }
}
