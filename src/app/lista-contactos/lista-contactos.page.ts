import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {

  contactos: Observable<any[]>;

  constructor(private contactoService: ContactosService, private router: Router) { }

  ngOnInit() {
    this.contactos = this.contactoService.getContactos();
  }
  nuevoContacto(){
    this.router.navigate(['/contact']);
  }

  //  contactosService(){
  //    this.contactos = this.contactoService.getContactos();
  // }




}
