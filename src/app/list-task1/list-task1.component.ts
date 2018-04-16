import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-list-task1',
  templateUrl: './list-task1.component.html',
  styleUrls: ['./list-task1.component.css']
})
export class ListTaskComponent1 implements OnInit {

	public tasks;

  	constructor(private angularFire: AngularFireDatabase) {

  	}

	ngOnInit() {
		this.getTask().subscribe(res => {
			this.tasks = res;
		});
	}

	getTask(){
		return this.angularFire.list('/news').valueChanges();
	}

}
