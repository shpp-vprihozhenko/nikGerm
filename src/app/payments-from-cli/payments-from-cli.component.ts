import { Component, OnInit } from '@angular/core';
import { arCli } from '../clients';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-payments-from-cli',
  templateUrl: './payments-from-cli.component.html',
  styleUrls: ['./payments-from-cli.component.css']
})
export class PaymentsFromCliComponent implements OnInit {
  clients: string[];
  choosenClient: string;
  sum: number;
  date: string;
  data: any;
  isAuth: boolean;

  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { 
    this.clients = (new arCli()).clients;
    let now = new Date();
    this.date = now.toISOString().slice(0,10);    
    if(!auth.isAuth){
      this.router.navigate(['authForm']);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('subm', this.choosenClient,'sum',this.sum);
    if(!this.choosenClient) {
      alert('Укажите клиента!');
      return;
    }  
    if(!this.sum) {
      alert('Укажите сумму!');
      return;
    }
    this.http.get(this.auth.myUrl+':6620/payment/'+this.choosenClient+'/'+this.sum+'/'+this.date).subscribe((data:any) => {
     this.data=data;
     console.log('received data', data);
    });

    alert('передаю в 1с оплату '+this.sum+' от '+this.choosenClient);
    
    this.router.navigate(['']);
    //document.location.href="/";
  
  }
}
