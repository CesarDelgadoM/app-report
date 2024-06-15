import { Component, Input } from '@angular/core';
import { RestaurantService } from '../../../services/restaurant.service';
import { Emitters } from '../../../emitters/emitters';
import { User } from '../../../interfaces/user';
import { AuthService } from '../../../services/auth.service';
import { Restaurant } from '../../../interfaces/restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent {

  user!: User;
  restaurants: Restaurant[] = [];

  constructor(private authService: AuthService,
    private sevice: RestaurantService) {
    this.user = Emitters.user;
  }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
      this.sevice.getRestaurants(this.user.id).subscribe((response) => {
        this.restaurants = response;
        console.log(this.restaurants);
      });
  }

}
