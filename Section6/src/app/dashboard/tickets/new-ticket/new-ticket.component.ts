import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  enteredTitle = '';
  enterdText = '';
  // constructor() {
  //   afterRender(() => {
  //     console.log('after render');
  //   });

  //   afterNextRender(() => {
  //     console.log('after next render');
  //   });
  // }

  add = output<{ title: string; text: string }>();

  ngOnInit() {}

  ngAfterViewInit() {}

  onSubmit() {
    this.add.emit({ title: this.enteredTitle, text: this.enterdText });
    // console.log(title);
    // console.log(ticketText);
    // this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enterdText = '';
  }
}
