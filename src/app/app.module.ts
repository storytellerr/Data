import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { RootComponent } from './root/root.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import {Education} from './education/education.component';
import {RouterModule,Routes} from '@angular/router';
import {Sports} from './Sports/Sports.component';
import {homePageComponent} from './home-page/home-page.component';
import {About} from './about/about.component';


@NgModule({
  declarations: [
    RootComponent,
    AddTaskComponent,
    ListTaskComponent,
    Education,
    Sports,
    homePageComponent,
    About,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
    {path:'education',component:Education},
    {path:'',component:homePageComponent},
    {path:'sports',component:Sports},
    {path:'about',component:About},
    ])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
