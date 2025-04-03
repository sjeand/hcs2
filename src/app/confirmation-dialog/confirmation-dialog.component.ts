import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GunshowService } from '../services/gunshow.service';
import { Gunshow } from '../model/gunshow';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: true,
  providers: [GunshowService],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  @Output() confirmed = new EventEmitter<boolean>();
  @Input() gunshow: Gunshow | null = null;

  constructor() { }

  onConfirm(): void {
    this.confirmed.emit(true);
  }

  onCancel(): void {
    this.confirmed.emit(false);
  }
}

