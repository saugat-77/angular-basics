import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpecial]'
})

export class SpecialDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.applySpecialColor('deeppink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applySpecialColor('');
  }

  private applySpecialColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}