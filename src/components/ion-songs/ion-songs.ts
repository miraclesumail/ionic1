import { Component } from '@angular/core';

/**
 * Generated class for the IonSongsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-songs',
  templateUrl: 'ion-songs.html'
})
export class IonSongsComponent {

  text: string;

  constructor() {
    console.log('Hello IonSongsComponent Component');
    this.text = 'Hello World';
  }

}
