import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items:any[];

  constructor(public productService:ProductsService) {
  }
  
  ngOnInit() {
    this.items=this.productService.allItems;
  }




}
