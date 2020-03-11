import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  router: Router;
  authServ: AuthService;

  constructor(private auth:AuthService, private r:Router){
    this.router = r;
    this.authServ = auth;
  }

  ngOnInit() {
    let urlAr = (window.location.href).split(':');
    this.auth.myUrl =  urlAr[0]+":"+urlAr[1];
    console.log('w',this.auth.myUrl);
    if(!this.authServ.isAuth){
      console.log('not auth');
      this.router.navigate(['authForm']);
    }
  }

}
