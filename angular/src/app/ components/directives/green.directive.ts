import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor(private element: ElementRef, private renderer2: Renderer2) {
    element.nativeElement.style.background = 'lightgreen';
  }
  @HostListener('mouseover')
  change(): void {
    this.element.nativeElement.style.background = 'yellow';
  }
}
