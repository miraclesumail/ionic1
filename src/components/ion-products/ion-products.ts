import { Component } from '@angular/core';

/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-products',
  templateUrl: 'ion-products.html'
})
export class IonProductsComponent {

  text: string;

  constructor() {
    console.log('Hello IonProductsComponent Component');
    this.text = 'Hello World';
  }

}
