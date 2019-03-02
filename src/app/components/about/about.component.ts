import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../servicios/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
      info:string;
      constructor(private _aboutService:AboutService){

      }
      ngOnInit(){
        this.info = this._aboutService.getInfo();
      }

}
