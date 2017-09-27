import { Injectable } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { ToastrService } from '../../common/toastr.service';
import { CreateEventComponent } from './create-event.component';

@Injectable()
export class EventRouteDeactivatorService implements CanDeactivate<CreateEventComponent> {

  constructor(private toastr: ToastrService) { }

  canDeactivate(createEventComponent: CreateEventComponent) {
    if (createEventComponent.isDirty) {
      return window.confirm(`Do you really want to cancel?`);
    }
    return true;
  }

}
