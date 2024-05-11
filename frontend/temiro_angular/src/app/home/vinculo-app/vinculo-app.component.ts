import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vinculo-app',
  templateUrl: './vinculo-app.component.html',
  styleUrls: ['./vinculo-app.component.css']
})
export class VinculoAppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  currentSlide = 0;

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + 2) % 2;
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % 2;
  }
 
}
