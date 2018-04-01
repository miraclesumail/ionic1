import { Component, ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the CustomToastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-toast',
  templateUrl: 'custom-toast.html'
})
export class CustomToastComponent {
  @ViewChild('qwe') qwe:ElementRef;

  text: string;
  title:string = "axiba"
  active:boolean = true;

  constructor() {
    console.log('Hello CustomToastComponent Component');
    this.text = 'Hello World';
    //setTimeout(() => this.show(), 2000)
  }

  show(){
    console.log('wcvwc')
    setTimeout(()=>    this.qwe.nativeElement.classList.add('active'),500
    )
  }

}
