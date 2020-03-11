import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  user: string = 'user';
  pwd: string;
  authServ: AuthService;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { 
    this.authServ = auth;
  }

  ngOnInit() {
  }

  onSubmitPwd(){
    console.log('check ',this.pwd);
    this.http.get(this.auth.myUrl+':6620/checkPassword/'+this.pwd).subscribe((data:any) => {
      console.log('received answer', data);
      if(data.res){
        if(data.res=='ok'){
          this.auth.isAuth = true;
          this.router.navigate(['']);
        } else {
          alert('wrong password');
          this.pwd = '';
          this.router.navigate(['authForm']);
        }
      } else {
        alert('no password');
        this.pwd = '';
        this.router.navigate(['authForm']);
      }
    }); 
 }
}
