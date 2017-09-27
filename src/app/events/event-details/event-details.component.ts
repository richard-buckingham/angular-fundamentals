// events/1
import { Component, OnInit } from '@angular/core';

import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(private service: EventService) { }

  ngOnInit() {
    this.event = this.service.getEvent(1);
  }

}
