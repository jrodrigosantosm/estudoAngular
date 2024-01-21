import { Component } from '@angular/core';
import { ModalComponent } from '../form/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {constructor(private ngbModal: NgbModal) {}

openFormModal() {
  this.ngbModal.open(ModalComponent);
}
}
