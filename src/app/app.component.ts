import { Component} from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Component';
  tasks:Task[]=[
    {name:"牛乳を買う",state:true},
    {name:"仕事行く",state:true},
    {name:"寝る",state:false},
  ]
  newTaskTitle = '';
//addtaskメソッド
  addTask() {
    this.tasks.push({name: this.newTaskTitle, state: false});
    this.newTaskTitle = '';
  }
}
