import {ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

/* Acá se debe hacer import de todos los componentes que se vayan a utilizar */
import{AppComponent} from './app.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';


/* Dentro de la constante router, se pueden agregar todas las rutas que se quiera
* path es la dirección de navegación
* con ':param' se puede agregar un parámetro, por ejemplo :'id', puede llevar el nombre que quiera
*/
export const router:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'product/:id',component:ProductComponent}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);
