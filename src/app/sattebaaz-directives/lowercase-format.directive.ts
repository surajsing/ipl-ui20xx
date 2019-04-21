import { Directive, HostListener, ElementRef, Input } from '@angular/core';


@Directive({
  selector: '[appLowercaseFormat]'
})
export class LowercaseFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('keyup')
  onkeypress(){
    let val:string= this.el.nativeElement.value;
      this.el.nativeElement.value = val.toLowerCase();
  }

}
