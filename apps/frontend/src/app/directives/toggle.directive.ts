import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appToggle]',
  standalone: true
})
export class ToggleDirective {

  @Input() @HostBinding('class.close')toggle=false
  @Output() isFocused= new EventEmitter<boolean>()


  @HostListener('document:click',['$event']) opening(event:Event){
    this.toggle= this.elRef.nativeElement.contains(event.target) ? !this.toggle : false
    this.isFocused.emit(this.toggle)
  }
  
  constructor(private elRef:ElementRef) { }

  

}
