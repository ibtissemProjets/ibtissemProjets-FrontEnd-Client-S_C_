import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InscriCliService {

  url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  create(data): Observable<any> {
   
    return this.http.post("http://localhost:3000/users/register", data);
  }

  getUser(): Observable<any> {
    return this.http.get(this.url + "/admin/getUsers");
  }
}



