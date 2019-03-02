import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Heroe } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe:Heroe;
 @Input() index:number;
 //@Output() heroeSeleccionado:EventEmitter<number>;
  constructor(private router:Router) { 
   // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe(){
   this.router.navigate(["/heroe",this.index]);
  // this.heroeSeleccionado.emit(this.heroe.idx);
  }

}
