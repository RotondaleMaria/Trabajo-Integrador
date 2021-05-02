import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { LibroComponent } from './libro/libro.component';
import { FormularioLibreriaComponent } from './libreria/formulario-libreria/formulario-libreria.component';
import { FormularioLibroComponent } from './libro/formulario-libro/formulario-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LibreriaComponent,
    LibroComponent,
    FormularioLibreriaComponent,
    FormularioLibroComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path:'libreria', component: LibreriaComponent},
      { path:'libro', component: LibroComponent},
      { path: 'libreria-nuevo',component:FormularioLibreriaComponent},
      { path: 'libreria-editar/:id', component:FormularioLibreriaComponent},
      { path: 'libro-nuevo',component:FormularioLibroComponent},
      //{ path: 'libro-editar/:id', component:FormularioLibroComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
