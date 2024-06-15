import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../../emitters/emitters';
import { User } from '../../../interfaces/user';
import { AuthService } from '../../../services/auth.service';
import { AlertsService } from '../../../services/alerts.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  user!: User;

  constructor(private authService: AuthService, 
    private alertsService: AlertsService) {}

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      user => {
        this.user = user;
      }
    )
  };

  logout(): void {
    this.authService.logout().subscribe(
      (message) => {
        this.alertsService.openSuccessSnackBar(message);
      });
  }

}
