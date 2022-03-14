import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getStudentsData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/students');
  }

  getInstructorsData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/instructors');
  }

  getVehiclesData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/vehicles');
  }

}
