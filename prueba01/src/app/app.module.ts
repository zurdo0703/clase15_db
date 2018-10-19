import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { UsuariosComponent } from './galeria/usuarios/usuarios.component';
import { UserComponent } from './galeria/usuarios/user/user.component';

const rutas: Routes = [
	{ path:'', component: HomeComponent },
  { path:'galeria', component: GaleriaComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    HomeComponent,
    MenuComponent,
    UsuariosComponent,
    UserComponent
  ],
  imports: [
  	RouterModule.forRoot(
      rutas
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
