import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './navbar/home/home.component';
import { AmComponent } from './navbar/category/am/am.component';
import { BComponent } from './navbar/category/b/b.component';
import { CComponent } from './navbar/category/c/c.component';
import { DComponent } from './navbar/category/d/d.component';
import { TComponent } from './navbar/category/t/t.component';
import { PriceComponent } from './navbar/price/price.component';
import { InstructorComponent } from './navbar/instructor/instructor.component';
import { VehiclesComponent } from './navbar/vehicles/vehicles.component';
import { InformationComponent } from './navbar/information/information.component';
import { UserComponent } from './profiles/user/user.component';
import { AdminComponent } from './profiles/admin/admin.component';
import { SubjectsComponent } from './profiles/admin/subjects/subjects.component';
import { LessonComponent } from './profiles/admin/lesson/lesson.component';
import { InstructorsComponent } from './profiles/admin/instructors/instructors.component';
import { VehicleadminComponent } from './profiles/admin/vehicleadmin/vehicleadmin.component';
import { StudentsComponent } from './profiles/admin/students/students.component';
import { BeComponent } from './navbar/category/b/be/be.component';
import { D1Component } from './navbar/category/d/d1/d1.component';
import { D1eComponent } from './navbar/category/d/d1e/d1e.component';
import { DeComponent } from './navbar/category/d/de/de.component';
import { CeComponent } from './navbar/category/c/ce/ce.component';
import { C1eComponent } from './navbar/category/c/c1e/c1e.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AmComponent,
    BComponent,
    CComponent,
    DComponent,
    TComponent,
    PriceComponent,
    InstructorComponent,
    VehiclesComponent,
    InformationComponent,
    UserComponent,
    AdminComponent,
    SubjectsComponent,
    LessonComponent,
    InstructorsComponent,
    VehicleadminComponent,
    StudentsComponent,
    BeComponent,
    D1Component,
    D1eComponent,
    DeComponent,
    CeComponent,
    C1eComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
