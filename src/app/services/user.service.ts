import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs'
import { User } from '../model/user'

@Injectable({
  providedIn: 'root',
})
export class UserService {

  //mock api 
  private serviceUrl = 'https://61a520d14c822c00170420d9.mockapi.io/policies'

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl)
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.serviceUrl}/${id}`, user);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.serviceUrl, user);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.serviceUrl}/${id}`);
  }
}
