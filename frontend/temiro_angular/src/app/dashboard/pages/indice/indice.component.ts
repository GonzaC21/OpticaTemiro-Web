import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.component.html',
  styleUrls: ['./indice.component.css']
})
export class IndiceComponent {

  router = inject(Router);

  onClickSalir(){
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }


}




