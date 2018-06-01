import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

public tasks;
public slides: string [] = ['./assets/img/webite.png', './assets/img/webite.png', './assets/img/timthumb.png' ]
i: number;

constructor(private angularFire: AngularFireDatabase) { }

  ngOnInit() {
  this.i = 0;

  }




    showSlide(slides, i) {
    console.log("show"+i)
        let slide = slides[Math.abs(i)];
        return slide;
    }

    getPrev(slides, i) {
        this.i = (this.i - 1)%3
        this.showSlide(slides, i)
        console.log(this.i)

    }

    getNext(slides, i) {
        this.i = (this.i + 1)%3;
        this.showSlide(slides, i)
        console.log(this.i)
    }



}
