import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slist',
  templateUrl: './slist.component.html',
  styleUrls: ['./slist.component.css']
})
export class SlistComponent implements OnInit, OnChanges {

  @Input() guestList!:any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['guestList'].currentValue){
      this.guestList = changes['guestList'].currentValue;
    }
  }
}
