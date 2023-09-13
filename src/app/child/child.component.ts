import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  constructor(){
    this.childmessage="child"
  }
  //childMessageにはInputデコレータを付与して、親から受け取ったデータを入力する
  @Input() childmessage: string;
}
