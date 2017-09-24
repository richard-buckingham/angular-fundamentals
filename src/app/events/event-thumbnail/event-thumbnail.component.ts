import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am') {
      console.log('getting the start time style');
      return 'red bold';
    }
    return { };
  }
}
