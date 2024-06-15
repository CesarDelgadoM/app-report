import { Component, OnInit } from '@angular/core';
import { Emitters } from '../../emitters/emitters';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.authService.authentication().subscribe(
      user => {
        Emitters.user = user;
      }
    )
  }
}
