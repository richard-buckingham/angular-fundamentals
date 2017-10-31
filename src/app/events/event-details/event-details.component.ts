// events/1
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { EventService } from '../shared/event.service';
import { IEvent, ISession } from '../models/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent;
  addMode: boolean;
  filterBy: 'all';

  constructor(private service: EventService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const eventId: number = +this.route.snapshot.params['id'];
    this.event = this.service.getEvent(eventId);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    console.log(`in processNewSession`);
    console.log(`session`, session);
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.service.updateEvent(this.event);
    this.addMode = false;
  }

  cancelAddSession() {
    console.log('in cancelAddSession');
    this.addMode = false;
  }



}
