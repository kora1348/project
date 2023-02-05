import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { Subject, takeUntil } from "rxjs";
import { SessionService } from "src/app/servcices/sessions.service";
import { SessionAction } from "src/app/store/session/session.actions";
import { Login } from "./login";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
  })
  export class SigninComponent implements OnInit {
  loginForm: Login = new Login();
  ngUnsubscribe = new Subject<void>();
  
  constructor(private log : SessionService, private store : Store, private router: Router) {
  
  }
  
  ngOnInit() {
  }
  
  login():void {
  this.log.login(this.loginForm)
  .pipe(
  takeUntil(this.ngUnsubscribe),
  ).subscribe(
  res => {
  if (res.islogged === true) {
  this.store.dispatch(new SessionAction(res))
  this.router.navigate(['/dashboard/administration/corporate-action']);
  } else {
  alert("L'identifiant est incorrect ! ")
  }
  }
  )
  }
  }