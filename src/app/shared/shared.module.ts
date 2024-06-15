import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsService } from '../core/services/alerts.service';
import { SnackbarComponent } from './alerts/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
;

@NgModule({
  declarations: [SnackbarComponent],
  imports: [
    CommonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
  ],
  providers: [AlertsService]
})
export class SharedModule { }
