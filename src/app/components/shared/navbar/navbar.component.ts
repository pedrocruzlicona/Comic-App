import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  
})
export class NavbarComponent {
  nombre:any={};
constructor(private router:Router){

}
buscarHeroe(termino:string){
console.log(termino);

this.router.navigate(["/search",termino]);
}
}
