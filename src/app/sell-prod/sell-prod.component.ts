import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { arCli } from '../clients';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sell-prod',
  templateUrl: './sell-prod.component.html',
  styleUrls: ['./sell-prod.component.css']
})

export class SellProdComponent implements OnInit {
  buyers: string[];
  choosenBuyer: string;
  quantity: number;
  date: string;
  data : any;

  constructor(private router: Router, private http: HttpClient, private auth: AuthService) { 
    this.buyers = (new arCli()).clients;
    let now = new Date();
    this.date = now.toISOString().slice(0,10);
    console.log('d1', this.date);
    if(!auth.isAuth){
      this.router.navigate(['authForm']);
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    /*
    function httpGet(theUrl){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", theUrl+'&id=123', false ); // false for synchronous request
      xmlHttp.send( null );
      return xmlHttp.responseText;
    }
    */
    console.log('subm', this.choosenBuyer,'q',this.quantity,'d',this.date);
    if(!this.choosenBuyer) {
      alert('Укажите клиента!');
      return;
    }
    if(!this.quantity) {
      alert('Укажите количествo наборов!');
      return;
    }
    this.http.get(this.auth.myUrl+':6620/sell/'+this.choosenBuyer+'/'+this.quantity+'/'+this.date).subscribe((data:any) => {
     this.data=data;
     console.log('received data', data);
    });


    alert('передаю в 1с отгрузку '+this.quantity+' наборов на '+this.choosenBuyer);
    
    this.router.navigate(['']);
    //document.location.href="/";
  
  }
}
