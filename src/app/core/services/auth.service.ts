import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { environment } from "../../../environments/environment.development";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<string> {
    return this.http.post<string>(`${environment.authUrl}/login`, data);
  }

  register(data: any): Observable<string> {
    return this.http.post<string>(`${environment.authUrl}/register`, data);
  }

  authentication(): Observable<User> {
    return this.http.get<User>(`${environment.authUrl}/authenticate`)
  }

  logout(): Observable<string> {
    return this.http.patch<string>(`${environment.authUrl}/logout`, {})
  }
}