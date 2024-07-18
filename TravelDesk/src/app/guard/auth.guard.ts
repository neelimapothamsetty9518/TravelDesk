import { CanActivateFn ,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { inject,PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  const token = localStorage.getItem('token');
  const userRole = authService.getRole();
  if (!token) {
    router.navigate(['/login-form']);
    return false;
  }
  const roles = route.data['roles'] as Array<string>;
  if (roles && roles.indexOf(userRole!) === -1) {
    router.navigate(['/login-form']);
    return false;
  }
  // Optionally check token expiration and user roles here
  return true;
};
/*
export const authGuardChild: CanActivateChildFn = (route, state) => {
  return authGuard(route, state);
};*/
