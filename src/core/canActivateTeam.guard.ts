import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SessionState } from "src/app/store/session/session.state";

@Injectable()
export class CanActivateTeam implements CanActivate {
  @Select(SessionState.islogged) islogged$!: Observable<boolean>;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.islogged$.pipe(
      map((res) => {
        if (res) {
          return true;
        } else {
          return this.router.parseUrl("/");
        }
      })
    );
  }
}
