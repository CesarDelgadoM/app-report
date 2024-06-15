import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { AlertsService } from "../services/alerts.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private alertService: AlertsService, private ngZone: NgZone) { }

  handleError(error: any): void {

    this.ngZone.run(() => {

      console.log(error)
      this.alertService.openFailureSnackBar(
        error?.error || 'Internal Error'
      )
    });
  }
} 