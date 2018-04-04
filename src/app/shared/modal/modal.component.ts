import {
  Component, Input, Output, EventEmitter, Directive,
  ChangeDetectionStrategy, ViewChild, ElementRef
} from '@angular/core';
import { Modal } from 'ngx-modal';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title: string;
  @Input() cssClass: string;
  @Input() takeOverMode: boolean;
  @Output() onOpen: EventEmitter<any> = new EventEmitter();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @ViewChild('modal') modal: Modal;

  isOpen: boolean;
  /**
   * Open modal
   * @memberOf ModalNewComponent
   */
  open(): void {
    this.modal.open();
  }

  /**
   * Close modal
   * @memberOf ModalNewComponent
   */
  close(): void {
    this.modal.close();
  }

  /**
   * emits event on open
   * @param {any} event
   * @memberOf ModalNewComponent
   */
  actionOnOpen(event: any): void {
    this.isOpen = true;
    this.onOpen.emit(event);
  }

  /**
   * emits event on close
   * @param {any} event
   * @memberOf ModalNewComponent
   */
  actionOnClose(event: any): void {
    this.isOpen = false;
    this.onClose.emit(event);
  }

  /**
   * emits event on submit
   * @param {any} event
   * @memberOf ModalNewComponent
   */
  actionOnSubmit(event: any): void {
    this.onSubmit.emit(event);
  }
}
