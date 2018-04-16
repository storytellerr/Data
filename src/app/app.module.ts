import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { RootComponent } from './root/root.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import {ListTaskComponent1} from './list-task1/list-task1.component';
import {RouterModule,Routes} from '@angular/router';
import {Sports} from './Sports/Sports.component';
import {homePageComponent} from './home-page/home-page.component';


@NgModule({
  declarations: [
    RootComponent,
    AddTaskComponent,
    ListTaskComponent,
    ListTaskComponent1,
    Sports,
    homePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
    {path:'news',component:ListTaskComponent1},
    {path:'',component:homePageComponent},
    {path:'sports',component:Sports},
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
