import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  public board;

    constructor(private angularFire: AngularFireDatabase) {

   }

  ngOnInit() {
  this.getTask().subscribe(res => {
    this.board = res;
  });
  }

  getTask(){
  console.log("hello");
		return this.angularFire.list('/noticeBoard').valueChanges();

	}

}
