import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataOrder } from './models/data-model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private url = 'assets/data.json';
  
  constructor(private http: HttpClient) { }

  getOrders(): Promise<DataOrder[]> {
    return this.http.get(this.url)
    .toPromise()
    .then(response => {
      console.log(Object.assign(response).response.data)
      return Object.assign(response).response.data
    })
  }
}
