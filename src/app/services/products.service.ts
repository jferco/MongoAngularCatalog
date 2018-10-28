import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /* Objeto que contiene todos los items*/
  items:any[]=[
    {"id":"it001","category":"Electrónicos","price":1000,"title":"iPad", "img": "ipad.jpeg", "description": "Tableta Apple iPad"},
    {"id":"it002","category":"Ropa","price":1000,"title":"Blusa", "img": "blusa.jpg", "description": "Blusa Azul"},
    {"id":"it003","category":"Calzado","price":1000,"title":"Zapatos", "img": "zapatos.jpeg", "description": "Zapatos Vino"},
    {"id":"it004","category":"Accesorios","price":1000,"title":"Bolso", "img": "bolso.jpg", "description": "Bolso para laptop"},
    {"id":"it005","category":"Electrónicos","price":1000,"title":"Laptop", "img": "laptop.jpg", "description": "Laptop Razer Blade"}
  ];

  constructor() {

   }
 
  /* retorna todos los items */
  get allItems(){
    return this.items;
  }


  /* busca y retorna un item por id. Si no encuentra nada, retorna [object] */
  getItem(id:string){
    let result:any;

    for(let item of this.items){
      if(item.id ==id){
        result = item;
        break;
      }
    }
    return result;
  }

}
