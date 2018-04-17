import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class Education implements OnInit {

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
