import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${environment.apiURL}/drivers.json?limit=900`);
  }

  public getOne(id: string): Observable<ApiResponse>{

    return this.http.get<ApiResponse>(`${environment.apiURL}/drivers/${id}.json`);
  }
}
