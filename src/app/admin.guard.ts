// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthorizationService } from './services/auth/authorization.service';
// import { map, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminGuard implements CanActivate {

//   constructor(private authService: AuthorizationService,
//     private router: Router) {

//   }
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return this, this.authService.hasUser().pipe(

//       map(user => user === null ? false : true),
//       tap(hasUser => {
//         if (!hasUser) {
//           this.router.navigate(['/login']);
//         }
//       }),
//     );
//   }

// }
