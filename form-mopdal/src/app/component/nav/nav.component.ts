import { Component } from '@angular/core';
import { ModalComponent } from '../form/modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(
  private ngbModal: NgbModal,
  private router: Router
  ) {}

openFormModal() {
  this.ngbModal.open(ModalComponent);
}

navigateToHome() {
  this.router.navigate(['/home']);
}

navigateToContatos() {
  this.router.navigate(['/contatos']);
}
}
