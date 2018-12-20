import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Agency } from './models/agency';
import { Status } from './models/status';
import { MissionType } from './models/mission-type';
import { Launch } from './models/launch';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAgencies(): Observable<Agency[]> {
    return this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies as Agency[]));
  }

  public getTypes(): Observable<MissionType[]> {
    return this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types as MissionType[]));
  }

  public getStatus(): Observable<Status[]> {
    return this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types as Status[]));
  }

  public getLaunches(): Observable<Launch[]> {
    return this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map((res: any) => res.launches as Launch[]));
  }
}
