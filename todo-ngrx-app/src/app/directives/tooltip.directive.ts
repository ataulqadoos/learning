import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input('appTooltip') tooltipText: string = '';

  tooltipElement = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    console.log('mouseOver=' + this.tooltipText);
    this.tooltipElement = this.renderer.createElement('div');
    this.renderer.appendChild(this.tooltipElement, this.renderer.createText(this.tooltipText));
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background-color', 'black');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '5px');

    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = { top: hostPos.bottom, left: hostPos.left };
    this.renderer.setStyle(this.tooltipElement, 'top', `${tooltipPos.top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${tooltipPos.left}px`);
    this.renderer.appendChild(document.body, this.tooltipElement);

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeChild(document.body, this.tooltipElement);
  }
}
