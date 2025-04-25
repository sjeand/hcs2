import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  standalone: true,
  imports: [],
  templateUrl: './toast-message.component.html',
  styleUrl: './toast-message.component.scss'
})

export class ToastMessageComponent {
 @Input() message = "";
  @Output() public onClose = new EventEmitter();
 
    closeToast() {
      this.onClose.emit();
    }
  }