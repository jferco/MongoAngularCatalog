import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { isPromiseAlike } from 'q';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:string; /* almacena el id del producto actual */
  private sub:any; /* objeto suscriptor, se utiliza para obtener el parámetro del navegador */
  product:any; /* OBjeto que almacena el producto actual */


/*   Constructor de la clase
   ActivatedRoute - objeto que obtiene parámetros de navegación
   ProductService - Servicio que gestiona los productos
*/
  constructor(private route: ActivatedRoute, public productService:ProductsService) { }

  /* ngOnInit realiza funciones al cargar el componente */
  ngOnInit() {
   /*  Esto es una promesa, lee el parámetro de navegación y lo asigna al atributo id */
    this.sub = this.route.params.subscribe(params=> {
      this.id = params['id'];
    });

    /* Llama al método getItemInfo */
    this.getItemInfo();
  }

  getItemInfo(){
    this.product=this.productService.getItem(this.id);
  }

}
