import { Injectable } from '@angular/core';



@Injectable()
export class AboutService {
   private info:string = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis eum, quidem aperiam explicabo, quo ad quisquam possimus dicta eius reprehenderit deleniti perferendis repellat doloribus numquam quibusdam asperiores a illo voluptatibus?";
    constructor(){
        console.log("Servicio listo para utilizarse");
    }
    getInfo(){
        return this.info;
    }
}