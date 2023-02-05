import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SessionState } from "../store/session/session.state";

@Injectable()
export class IsActivate implements CanActivate {
@Select(SessionState.islogged) islogged$!: Observable<boolean>;

constructor(private router: Router) { }

canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<boolean | UrlTree> {

return this.islogged$.pipe(
map(res => {
if (res) {
return this.router.parseUrl('/dashboard/administration/corporate-action');
} else {
return true;

}
})
);
}
}