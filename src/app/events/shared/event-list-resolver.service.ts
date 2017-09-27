import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { EventService } from './event.service';
import { ToastrService } from '../../common/toastr.service';




@Injectable()
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService,
              private toastr: ToastrService) { }

  resolve() {
    this.toastr.info(`resolving the event list...`);
    return this.eventService.getEvents().map(events => events);
  }

}
