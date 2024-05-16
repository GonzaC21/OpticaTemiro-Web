import { Component } from '@angular/core';
import { NavigationService } from 'src/app/comun/navbar/navigation.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  constructor(public navigationService: NavigationService) {
    this.navigationService.showLinks = false;
  }
}
