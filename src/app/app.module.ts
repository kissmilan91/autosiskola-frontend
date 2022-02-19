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
import { ContactComponent } from './navbar/contact/contact.component';
import { RegistrationComponent } from './navbar/registration/registration.component';
import { LoginComponent } from './navbar/login/login.component';
import { CoursedataComponent } from './profiles/user/coursedata/coursedata.component';
import { CategoryComponent } from './profiles/admin/category/category.component';

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
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
    CoursedataComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
