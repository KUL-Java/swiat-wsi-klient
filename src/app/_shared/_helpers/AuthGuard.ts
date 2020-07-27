import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      return true;
    }
    this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
