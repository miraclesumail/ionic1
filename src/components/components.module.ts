import { NgModule } from '@angular/core';
import { IonProductsComponent } from './ion-products/ion-products';
import { IonSongsComponent } from './ion-songs/ion-songs';
import { CustomToastComponent } from './custom-toast/custom-toast';
import { CommonModule } from '@angular/common';  

@NgModule({
	declarations: [IonProductsComponent,
    IonSongsComponent,
    CustomToastComponent],
	imports: [CommonModule],
	exports: [IonProductsComponent,
    IonSongsComponent,
    CustomToastComponent]
})
export class ComponentsModule {}
