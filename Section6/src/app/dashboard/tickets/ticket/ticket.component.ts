import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../../../support-tickits/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output({ alias: 'closeTicket' });

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
  }

  onMarkAsCopleted() {
    this.close.emit();
  }
}
