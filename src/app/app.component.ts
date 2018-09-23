import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'catalogoMongo';

  items:any[]=[
    {"title":"iPad", "img": "ipad.jpeg", "description": "Tableta Apple iPad"},
    {"title":"Blusa", "img": "blusa.jpg", "description": "Blusa Azul"},
    {"title":"Zapatos", "img": "zapatos.jpeg", "description": "Zapatos Vino"},
    {"title":"Bolso", "img": "bolso.jpg", "description": "Bolso para laptop"},
    {"title":"Laptop", "img": "laptop.jpg", "description": "Laptop Razer Blade"}
  ];

  constructor (){
  }


}
