import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  
  //get
  getStudentsData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/students');
  }

  getInstructorsData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/instructors');
  }

  getVehiclesData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/vehicles');
  }

  //insert
  insertStudentsData(studentData:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/students', studentData);
  }
  
  insertInstructorsData(instructorData:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/instructors', instructorData);
  }

  insertVehiclesData(vehicleData:any) {
    return this.httpClient.post('http://127.0.0.1:8000/api/vehicles', vehicleData);
  }

  //Delete
  deleteStudentData(id:number) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/students/'+id);
  }

  deleteVehicleData(id:number) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/vehicles/'+id);
  }

  deleteInstructorData(id:number) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/instructors/'+id);
  }

  //Update
  instructorUpdateById(id:number) {
    return this.httpClient.get('http://127.0.0.1:8000/api/instructors/searchID'+id)
  }
}
