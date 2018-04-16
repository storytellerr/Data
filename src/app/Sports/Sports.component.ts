import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'Sports',
  templateUrl: './Sports.component.html',
  styleUrls: ['./Sports.component.css']
})
export class Sports implements OnInit {

	public tasks;

  	constructor(private angularFire: AngularFireDatabase) {

  	}

	ngOnInit() {
		this.getTask().subscribe(res => {
			this.tasks = res;
		});
	}

	getTask(){
		return this.angularFire.list('/sports').valueChanges();
	}

}
