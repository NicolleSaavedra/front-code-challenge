import { Injectable } from '@angular/core';
import {HOUSES} from './mock-houses.json';
import {House} from './house';
import {of, map, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class HouseService {
  private urlEndPoint: string ='http://localhost:8081/api/houses'
  constructor(private http: HttpClient) { }

  getHouses(): Observable <House[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response) =>response as House[])
    )
  }
}
