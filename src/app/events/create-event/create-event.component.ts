import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {EventService} from '../shared/event.service';
import {IEvent} from '../models/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty = true;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues: IEvent) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

}
