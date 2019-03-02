import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';
 
// Servicios
import { HeroesService } from './servicios/heroes.service';
import { AboutService } from './servicios/about.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

@NgModule({
  //componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    ContactComponent,
    HeroeComponent,
    SearchComponent,
    HeroeTarjetaComponent
  ],
  //modulos
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  //servicios
  providers: [
    HeroesService,
    AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
