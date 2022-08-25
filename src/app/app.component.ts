import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { DataOrder } from './models/data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'json-to-table';
  dataExpected!:DataOrder[];
  searchString: string = '';

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getData()
  }
  
  getData(){
    this.ordersService.getOrders().then((result) => {
      this.dataExpected = result;

      console.log('dataExpected', this.dataExpected)
    })
    .catch((error) => error)
  }

  handleClear() {
    this.searchString = '';
  }
}
