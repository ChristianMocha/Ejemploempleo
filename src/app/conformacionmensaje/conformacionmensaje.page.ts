import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from '../model/mensaje';

@Component({
  selector: 'app-conformacionmensaje',
  templateUrl: './conformacionmensaje.page.html',
  styleUrls: ['./conformacionmensaje.page.scss'],
})
export class ConformacionmensajePage implements OnInit {

  mensaje: Mensaje;
  worked: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { 

    this.route.queryParams.subscribe( 
      params =>{
        if( this.router.getCurrentNavigation().extras.queryParams){
        
          this.mensaje = this.router.getCurrentNavigation().extras.queryParams.mensaje;
          this.worked = this.router.getCurrentNavigation().extras.queryParams.worked;
        }
    

    })
  }

  ngOnInit() {
  }



}
