import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css'],
  outputs: ['id: id']
})
export class TimeZoneComponent implements OnInit {

  @Input() timeZone: {toZone:String,toZoneCity:String,actual:Boolean,id:Number} | undefined

  @Output() changeTimeZone = new EventEmitter<String>();
    
  zoneTime:   String  = "-";
  id:         Number  = 0;
  @Input() isActual:   Boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.isActual = this.timeZone?.actual as Boolean;
    this.id = this.timeZone?.id as Number;
    this.timeRefresh();
  }

  timeRefresh() {
    this.zoneTime = new Date().toLocaleString(this.timeZone?.toZone.toString(), {timeZone: this.timeZone?.toZoneCity.toString()});
  }

  changeTimeZoneClicked() {
    this.changeTimeZone.emit(this.timeZone?.toZoneCity.toString());
    this.timeRefresh();
  }



}
