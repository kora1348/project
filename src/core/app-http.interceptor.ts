import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from "@angular/common/http";
  import { Injectable } from "@angular/core";
  import { Select, Store } from "@ngxs/store";
  import { Observable } from "rxjs";
  import { SessionState } from "src/app/store/session/session.state";
  
  @Injectable()
  export class AppHttpInterceptor implements HttpInterceptor {
    @Select(SessionState.user) user$!: Observable<string>;
  
    constructor(private store: Store) {}
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      throw new Error("Method not implemented.");
    }
  }
  