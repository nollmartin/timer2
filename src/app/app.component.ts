import { Component, ViewChildren, QueryList } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TimeZoneComponent } from './time-zone/time-zone.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time Zone Program';
  defaultTimeZone: String = 'Europe/Budapest';
  zoneCount=0;
  defaultZone='hu-HU';
  zoneTimes: {toZone: String, toZoneCity: String, actual: Boolean, id: number}[] = []
  selectedTimeZone: number = 1;

  updateSelectedTimezone(timeZoneId: number) {
    this.selectedTimeZone=timeZoneId;
  }

  addZoneTime() {
    this.zoneCount++;
    this.zoneTimes.push({toZone: this.defaultZone, toZoneCity: this.defaultTimeZone, actual: (this.selectedTimeZone===this.zoneCount ? true : false), id: this.zoneCount});
  }

}
