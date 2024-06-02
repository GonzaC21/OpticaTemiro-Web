import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const loginGuard = () => {

  const usuario = localStorage.getItem('usuario');
  const admin = localStorage.getItem('indiceadm');

  const router = inject(Router);

  if (localStorage.getItem('usuario') ) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }


}
