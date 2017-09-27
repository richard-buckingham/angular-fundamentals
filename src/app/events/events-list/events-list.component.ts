import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: any;

  constructor(private eventService: EventService,
              private toastrService: ToastrService,
              private activatedRoute: ActivatedRoute  ) {
  }

  ngOnInit() {
    this.toastrService.info('requesting events');
    this.events = this.activatedRoute.snapshot.data['eventsStoredInRouter'];
    this.toastrService.info('retrieved events from router...');
  }

/*
  ngOnInit() {
    this.toastrService.info('requesting events');
    // getEvents is now returning an observable.
    // you get the data out of an observable by subscribing to it.
    this.eventService.getEvents().subscribe(
      events => {
        this.toastrService.info('receiving events');
        console.log(events);
        this.events = events;
       }
    );
  }
*/

}
