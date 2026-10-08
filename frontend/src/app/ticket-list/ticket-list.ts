import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Ticket } from '../ticket.model';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './ticket-list.html',
  styleUrl: './ticket-list.scss'
})
export class TicketList implements OnInit {
  private service = inject(TicketService);
  tickets = signal<Ticket[]>([]);

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.list().subscribe(t => this.tickets.set(t));
  }

  remove(id: number) {
    this.service.delete(id).subscribe(() => this.load());
  }
}
