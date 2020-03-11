import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-states',
  templateUrl: './orders-states.component.html',
  styleUrls: ['./orders-states.component.css']
})

export class OrdersStatesComponent implements OnInit {
  orders: Order[];

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
    if(!auth.isAuth){
      console.log('no access');
      router.navigate(['authForm']);
    } else {
      this.orders = [];
      this.http.get(this.auth.myUrl+':6620/orders').subscribe((data:any) => {
        console.log('received data', data);
        this.orders = data;
      }); 
    }
  }

  ngOnInit() {
  }

}
