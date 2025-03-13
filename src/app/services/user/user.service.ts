import {inject, Injectable, Signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/user';
import {toSignal} from '@angular/core/rxjs-interop';
import {catchError, map, of} from 'rxjs';

// API DOCUMENTATION : https://randomuser.me/documentation#howto

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected httpClient = inject(HttpClient);

  constructor() { }

  getSingleUser(): Signal<User | null> {
    const userObservable = this.httpClient.get<any>('https://randomuser.me/api/?results=1')
      .pipe(
        map(data => data.results[0]),
        catchError(() => of(null))
      );

    return toSignal(userObservable, {initialValue: null});
  }
}
