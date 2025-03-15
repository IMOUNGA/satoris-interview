import {inject, Injectable, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../../entities/user.model';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, of} from 'rxjs';

// API DOCUMENTATION : https://randomuser.me/documentation#howto

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected httpClient = inject(HttpClient);

  constructor() { }

  getSingleUser(): Signal<UserModel | null> {
    const userObservable = this.httpClient.get<any>('https://randomuser.me/api/?results=1')
      .pipe(
        map(data => data.results[0]),
        catchError(() => of(null))
      );

    return toSignal(userObservable, {initialValue: null});
  }

  getSeveralUsers(numberOfUser: number): Signal<UserModel[] | null> {
    const numberOfUserValid = numberOfUser > 5 ? 5 : numberOfUser;

    const userObservable = this.httpClient.get<any>(`https://randomuser.me/api/?results=${numberOfUserValid}`)
      .pipe(
        map(data => data.results),
        catchError(() => of(null))
      );

    return toSignal(userObservable, {initialValue: null});
  }
}
