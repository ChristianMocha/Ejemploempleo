import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mensaje } from '../model/mensaje';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {




  mensajes: Mensaje = new Mensaje();

  worked: boolean = false;
  office: string;

  constructor(private router: Router, private contactService: ContactosService) { }

  ngOnInit() {

  }




  guardar(){
    // console.log(this.name, this.email, this.mensaje, this.worked)

    this.contactService.saveContacto(this.mensajes);

    let navigationExtras: NavigationExtras = {
      queryParams: {
        mensaje: this.mensajes,
        worked: this.worked
      }
    }


    
    this.router.navigate(['/conformacionmensaje'], navigationExtras);
  }

}
