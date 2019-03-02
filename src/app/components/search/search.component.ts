import { Component, OnInit} from '@angular/core';
import { HeroesService,Heroe } from '../../servicios/heroes.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
  
})
export class SearchComponent implements OnInit {
 
 heroesAux:Heroe[];
  parametroBusqueda:string;
  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService
    , private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.parametroBusqueda = params["nombre"];
     this.heroesAux = this._heroesService.buscarHeroes(this.parametroBusqueda);
     console.log(this.heroesAux);
   });
   
  }

  

}
