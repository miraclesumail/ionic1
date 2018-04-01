import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

/**
 * Generated class for the ColorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[color]' // Attribute selector
})
export class ColorDirective {
  @Input('color')
  set backgroundColor(colorName:string){
      this.changeColor(colorName);
   };

  constructor(private el:ElementRef, private renderer:Renderer) {
   //console.log(this.color)
        //el.nativeElement.style.backgroundColor=this.chColor;

    //this.changeColor(this.chColor);

  }

  ngOnInit() {
   //console.log(this.color);
}


  public changeColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, "background", color);
    //this.el.nativeElement.style.backgroundColor=color;
  }
}
