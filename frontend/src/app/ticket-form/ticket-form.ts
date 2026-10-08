import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-form',
  imports: [FormsModule],
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.scss'
})
export class TicketForm {
  private service = inject(TicketService);
  private router = inject(Router);

  ticket: Ticket = { titre: '', description: '', priorite: 'MOYENNE' };
  error = '';

  save() {
    this.service.create(this.ticket).subscribe({
      next: () => this.router.navigate(['/tickets']),
      error: () => this.error = 'Impossible de créer le ticket (titre obligatoire).'
    });
  }
}
