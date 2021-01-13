import { StringifyOptions } from "querystring";

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Mensaje } from '../model/mensaje';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private angularFireStore: AngularFirestore) { }

  saveContacto(contacto: Mensaje){

    const refContacto = this.angularFireStore.collection('contactos');
    if(contacto.uid == null){
      contacto.uid = this.angularFireStore.createId();
    }

    refContacto.doc(contacto.uid).set(Object.assign({}, contacto, { marge: true}));
  }


  getContactos(): Observable<any[]>{
    return this.angularFireStore.collection('contactos').valueChanges();
  }

}
