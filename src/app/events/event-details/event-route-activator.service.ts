import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';


@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService,
              private router: Router,
              private toastr: ToastrService) { }

  // the current route is passed into the canActivate method as the first parameter
  canActivate(currentRoute: ActivatedRouteSnapshot): boolean {

    const eventId: number = +currentRoute.params['id'];
    this.toastr.info(`eventId: ${eventId}`);
    // !! operator converts the result of the service call to a boolean
    const eventExists: boolean = !!this.eventService.getEvent(eventId);
    this.toastr.info(`eventExists: ${eventExists}`);

     if (! eventExists) {
      this.router.navigate(['/404']);
     }

    return eventExists;
  }


}
