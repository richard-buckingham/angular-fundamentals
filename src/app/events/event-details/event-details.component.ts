// events/1
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { EventService } from '../shared/event.service';
import { IEvent } from '../models/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  constructor(private service: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const eventId: number = +this.route.snapshot.params['id'];
    this.event = this.service.getEvent(eventId);
  }

}
