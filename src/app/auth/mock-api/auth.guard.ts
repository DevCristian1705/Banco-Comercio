import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs'; 
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
 

export class AuthGuard implements CanActivate,  CanLoad{

    constructor(
        private _authService: AuthService,
        private _router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        const redirectUrl = state.url === '/auth' ? '/' : state.url;
        return this._check(redirectUrl);
    }

    // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    //     const redirectUrl = state.url === '/sign-out' ? '/' : state.url;
    //     return this._check(redirectUrl);
    // }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean{
        return this._check('/');
    }


    private _check(redirectURL: string): Observable<boolean>{
        return this._authService.check().pipe(
            switchMap((authenticated) => {
                if ( !authenticated ){
                    this._router.navigate(['/auth'], {queryParams: {redirectURL}});
                    return of(false);
                }
                return of(true);
            })
        );
    }
}
