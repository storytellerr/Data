import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

	@ViewChild('closeBtn') closeBtn: ElementRef;
	public task;
	public firebase;

  	constructor(private angularFire: AngularFireDatabase) {
  		this.task = null;
  		this.firebase = this.angularFire.list('/task');
  	}

	ngOnInit() {

	}

	addTask(){
		if(this.task){
			this.firebase.push({
				task: this.task,
				createdDate: (new Date()).getTime()
			});
			this.closeBtn.nativeElement.click();
		} else {
			alert('Enter task');
		}
	}

}
