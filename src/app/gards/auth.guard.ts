import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

let router =inject(Router)

  if (localStorage.getItem('token')!) {
    return true;
  }
  else{
    alert("you can't go to home after log in ")
   router.navigate(['/login'])
   return false;
  }
};
