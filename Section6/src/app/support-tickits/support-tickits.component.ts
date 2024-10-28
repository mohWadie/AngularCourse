import { Component } from '@angular/core';
import { NewTicketComponent } from '../dashboard/tickets/new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from '../dashboard/tickets/ticket/ticket.component';

@Component({
  selector: 'app-support-tickits',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickits.component.html',
  styleUrl: './support-tickits.component.css',
})
export class SupportTickitsComponent {
  tickeits: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickeits.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickeits = this.tickeits.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
