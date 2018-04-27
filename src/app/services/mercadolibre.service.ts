import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MercadolibreService {
  constructor(public _http: Http) {}
  
  apiLink:any = "https://api.mercadolibre.com/sites/MCO/search?q="

  public get(prod : string): Observable<any> {
		const headers = new Headers({
			'Content-Type': 'application/json'
    });
    var link:string = this.apiLink + prod;
   
    
		const options = new RequestOptions({ headers: headers });
		return this._http.get(link, options).map((response) => response.json());
	}
}
