import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackbarComponent } from "../../shared/alerts/snackbar/snackbar.component";

@Injectable()
export class AlertsService {
  private durationSeconds = 3;

  constructor(private snackBar: MatSnackBar) {}

  openSuccessSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {message},
      duration: this.durationSeconds*1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'green-snackbar'
    });
  }

  openFailureSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: {message},
      duration: this.durationSeconds*1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'red-snackbar'
    });
  }
}