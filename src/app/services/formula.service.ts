import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Driver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${environment.apiURL}/drivers.json?limit=900`);
  }

  public getOne(id: string) : Observable<ApiResponse>{

    return this.http.get<ApiResponse>(`${environment.apiURL}/drivers/${id}.json`);
  }

  public post (pilot : Driver){
    return this.http.post<ApiResponse>(`${environment.apiURL}/drivers`,pilot);
  }

  public put (id : string, pilot : Driver) {
    pilot.driverId = id
    return this.http.put<ApiResponse>(`${environment.apiURL}/drivers/${id}`,pilot);
  }

  public delete (id : string) {
    return this.http.delete<ApiResponse>(`${environment.apiURL}/drivers/${id}`);
  }
}
