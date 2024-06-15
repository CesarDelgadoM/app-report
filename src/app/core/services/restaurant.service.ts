import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Restaurant } from "../interfaces/restaurant";
import { environment } from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
    
  }

  getRestaurants(userId: number): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${environment.restaurantUrl}/getall/userid:`+userId)
  }
}
