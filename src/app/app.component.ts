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

  actual = 1;

  @ViewChildren('cmp') components:QueryList<TimeZoneComponent> | undefined;

  zoneTimes: {toZone: String, toZoneCity: String, actual: Boolean, id: number}[] = [
    {toZone: 'hu-HU', toZoneCity: 'Europe/Budapest', actual: true, id: 1},
    {toZone: 'en-US', toZoneCity: 'America/Toronto', actual: false, id: 2}
  ]

  timeZoneChanged(id: Number) {
    this.components?.forEach(function (comp) {
      (comp.id === id) ? comp.isActual=true : comp.isActual=false;
      comp.timeRefresh();
    })
  }

}
