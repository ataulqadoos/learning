import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDisp]'
})
export class DispDirective {

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Input() set appDisp(value: boolean) {
    if (value) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }


}
