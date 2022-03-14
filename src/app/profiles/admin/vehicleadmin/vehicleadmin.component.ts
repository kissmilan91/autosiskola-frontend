import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-vehicleadmin',
  templateUrl: './vehicleadmin.component.html',
  styleUrls: ['./vehicleadmin.component.css']
})
export class VehicleadminComponent implements OnInit {
  vehicles:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.vehiclesData();
  }

  vehiclesData() {
    this.dataService.getVehiclesData().subscribe(res => {
      this.vehicles = res;
    });
  }

}
