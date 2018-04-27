import { Component, OnInit } from '@angular/core';
import { MercadolibreService } from '../services/mercadolibre.service';
import { NgForm } from '@angular/forms/src/directives/ng_form'; 

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products : Array<any>

  prod;
  list : true;
 	constructor(
		private _mlService: MercadolibreService,
	) {}


  ngOnInit() {
  }

	getAllProducts(prod : string) {
    prod = this.prod;
		this._mlService.get(prod).subscribe(
			(data: any[]) => {
        this.products = data;
        console.log(this.products)
			},
			(err) => {
				console.log(err);
			},
			() => {
			
			}
		);
	}

}
