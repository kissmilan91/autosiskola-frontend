import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Instructor } from 'src/app/service/class/instructor';
import { Student } from 'src/app/service/class/student';
import { Vehicle } from 'src/app/service/class/vehicle';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminInstructors:any;
  adminStudents:any;
  adminVehicles:any;

  instructor = new Instructor();
  student = new Student();
  vehicle = new Vehicle();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.studentsData();
    this.instructorsData();
    this.vehiclesData();
  }

  studentsData() {
    this.dataService.getStudentsData().subscribe(res => {
      this.adminStudents = res;
    });
  }

  instructorsData() {
    this.dataService.getInstructorsData().subscribe(res => {
      this.adminInstructors = res;
    });
  }

  vehiclesData() {
    this.dataService.getVehiclesData().subscribe(res => {
      this.adminVehicles = res;
    });
  }

  insertStudent() {
    this.dataService.insertStudentsData(this.student).subscribe(res => {
      this.studentsData();
    })
  }

  insertInstructor() {
    this.dataService.insertInstructorsData(this.instructor).subscribe(res => {
      this.instructorsData();
    })
  }

  insertVehicle() {
    this.dataService.insertVehiclesData(this.vehicle).subscribe(res => {
      this.vehiclesData();
    })
  }

}
