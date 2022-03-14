import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {
  instructors:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.instructorsData();
  }

  instructorsData() {
    this.dataService.getInstructorsData().subscribe(res => {
      this.instructors = res;
    });
  }

}
