import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appOpen]',
  standalone: true
})
export class OpenDirective {

 
  @Input() @HostBinding('class.close')closed=true
  @Output() isFocused= new EventEmitter<boolean>()


  @HostListener('document:click',['$event']) opening(event:Event){
    this.closed= this.elRef.nativeElement.contains(event.target) ? !this.closed : true
    this.isFocused.emit(this.closed)
  }
  
  constructor(private elRef:ElementRef) { }
}
