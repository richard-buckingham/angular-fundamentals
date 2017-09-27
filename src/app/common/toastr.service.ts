import { Injectable } from '@angular/core';

// declare a local variable so that typescript stops complaining
// about the toastr global variable
declare let toastr;

@Injectable()
export class ToastrService {
  constructor() { }

  success(message: string, title?: string) {
    toastr.success(message, title);
  }

  info(message: string, title?: string) {
    toastr.info(message, title);
  }

  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }

  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
