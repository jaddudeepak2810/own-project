import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  images = [
    'https://www.w3schools.com/howto/img_band_chicago.jpg',
    'https://www.w3schools.com/howto/img_band_la.jpg',
    'https://www.w3schools.com/howto/img_band_ny.jpg'
  ];
  currentSlide = 0;

  changeSlide(index: number): void {
    this.currentSlide = index;
  }
}
