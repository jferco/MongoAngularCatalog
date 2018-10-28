/* Aquí se hacen todos los imports necesarios para funcionar, Todo se debe incluir acá
desde componentes, módulos, librerías externas y servicios.
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
/* bootstrap modules*/
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
/* componentes de la aplicación */
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

/* Enrutador */
import{routes} from './app.router';

/* Servicio de productos */
import { ProductsService } from './services/products.service';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    routes
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
