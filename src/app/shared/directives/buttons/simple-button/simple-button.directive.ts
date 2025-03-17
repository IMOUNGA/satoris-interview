import {Directive, ElementRef, HostBinding, inject, input, OnInit} from '@angular/core';

@Directive({
  selector: '[siSimpleButton]'
})
export class SimpleButtonDirective implements OnInit {
  private el: ElementRef = inject(ElementRef);

  siSimpleButtonColor = input<string>('#2e6bf6');

  @HostBinding('style.opacity') get opacity() {
    return this.el.nativeElement.disabled ? '.5' : '1';
  }

  @HostBinding('style.cursor') get cursor() {
    return this.el.nativeElement.disabled ? 'not-allowed' : 'pointer';
  }

  ngOnInit() {
    this.setStyle();
  }

  private setStyle() {
    this.el.nativeElement.style.border = 'none';
    this.el.nativeElement.style.width = '100%';
    this.el.nativeElement.style.padding = '1rem';
    this.el.nativeElement.style.borderRadius = '.5rem';
    this.el.nativeElement.style.backgroundColor = this.siSimpleButtonColor();
    this.el.nativeElement.style.color = '#fff';
    this.el.nativeElement.style.transition = 'opacity .3s';
  }

}
