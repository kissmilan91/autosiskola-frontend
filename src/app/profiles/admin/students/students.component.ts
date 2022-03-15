import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.studentsData();
  }

  studentsData() {
    this.dataService.getStudentsData().subscribe(res => {
      this.students = res;
    });
  }

  deleteStudentData(id:number) {
    this.dataService.deleteStudentData(id).subscribe(res => {
      this.studentsData();
    })
  }

}
