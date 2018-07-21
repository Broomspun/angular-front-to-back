import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownhover]'
})
export class DropdownhoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostBinding('class.show') isHovering = false;

  @HostListener('mouseover') onHover() {
    this.isHovering = true;
  }

  @HostListener('mouseout') onMouseout() {
    this.isHovering = false;
  }

}
