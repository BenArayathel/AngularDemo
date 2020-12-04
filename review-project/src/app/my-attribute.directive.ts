import { Directive, ElementRef, HostListener } from '@angular/core';
import { MyServiceService } from './services/my-service.service';

@Directive({
  selector: '[MyAttribute]'
})
export class MyAttributeDirective {

  constructor(private element: ElementRef, private myService: MyServiceService) { }

  @HostListener('mouseenter') onMouseEnter() {

    let text: string = this.element.nativeElement.innerText;

    text = text.toLowerCase();

    if(text == 'pikachu'){
      this.element.nativeElement.style.color = 'Yellow';
    }else {
      this.element.nativeElement.style.color = 'Purple';
    }
    
  }

}
