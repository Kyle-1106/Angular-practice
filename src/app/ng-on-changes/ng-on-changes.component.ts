import { Component, SimpleChanges,Input } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent {
   @Input() inputMessage: string;
  message: string;
  constructor(){
    this.message="message"
    this.inputMessage="input"
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    //プロパティの変更が検出されたときに呼び出される
    // if (changes.inputMessage) {
    //   this.message = 'Input message changed to: ' + changes.inputMessage.currentValue;
    // }
  }

  
}
