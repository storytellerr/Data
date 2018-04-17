import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: '',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class About implements OnInit {

	public tasks;

  	constructor(private angularFire: AngularFireDatabase) {

  	}

	ngOnInit() {
		this.getTask().subscribe(res => {
			this.tasks = res;
		});
	}

	getTask(){
		return this.angularFire.list('/task').valueChanges();
	}

}
