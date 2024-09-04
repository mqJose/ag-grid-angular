import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Client {
  id: string;
  name: string;
  price: number;
}

const CLIENTS_MOCK: Client[] = [
  {
    id: '1',
    name: 'Client 1',
    price: 100,
  },
  {
    id: '2',
    name: 'Client 2',
    price: 200,
  },
  {
    id: '3',
    name: 'Client 3',
    price: 300,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  getClients() {
    return of(CLIENTS_MOCK);
  }
}
