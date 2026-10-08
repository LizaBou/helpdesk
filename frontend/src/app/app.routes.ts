import { Routes } from '@angular/router';
import { TicketList } from './ticket-list/ticket-list';
import { TicketForm } from './ticket-form/ticket-form';

export const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  { path: 'tickets', component: TicketList },
  { path: 'tickets/new', component: TicketForm }
];
