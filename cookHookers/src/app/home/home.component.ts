import { Component } from '@angular/core';
// import {
//   interval,
//   Observable,
//   startWith,
//   Subject,
//   switchMap,
//   timer,
// } from 'rxjs';
interface Photo {
  url: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
// entrees: Photo[] = [
//     { url: '../../assets/image/entree1.jpg', title: 'Entrée 1' },
//     { url: '../../assets/image/entree2.jpg', title: 'Entrée 2' },
//     { url: '../../assets/image/entree3.jpg', title: 'Entrée 3' }
//   ];

//   plats: Photo[] = [
//     { url: '../../assets/image/plat1.jpg', title: 'Plat 1' },
//     { url: '../../assets/image/plat2.jpg', title: 'Plat 2' },
//     { url: '../../assets/image/plat3.jpg', title: 'Plat 3' }
//   ];

//   desserts: Photo[] = [
//     { url: '../../assets/image/dessert1.jpg', title: 'Dessert 1' },
//     { url: '../../assets/image/dessert2.jpg', title: 'Dessert 2' },
//     { url: '../../assets/image/dessert3.jpg', title: 'Dessert 3' }
//   ];

  // activeIndices = {
  //   entrees: 0,
  //   plats: 0,
  //   desserts: 0
  // };

  //  goToPrevious(): void {
  //   const isFirstSlide = this.currentIndex === 0;
  //   const newIndex = isFirstSlide
  //     ? this.slides.length - 1
  //     : this.currentIndex - 1;

  //   this.resetTimer();
  //   this.currentIndex = newIndex;
  // }

  //   goToNext(): void {
  //   const isLastSlide = this.currentIndex === this.slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

  //   this.resetTimer();
  //   this.currentIndex = newIndex;
  // }


}
