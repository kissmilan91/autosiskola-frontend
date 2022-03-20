import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmComponent } from './navbar/category/am/am.component';
import { BComponent } from './navbar/category/b/b.component';
import { CComponent } from './navbar/category/c/c.component';
import { DComponent } from './navbar/category/d/d.component';
import { TComponent } from './navbar/category/t/t.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { HomeComponent } from './navbar/home/home.component';
import { InformationComponent } from './navbar/information/information.component';
import { InstructorComponent } from './navbar/instructor/instructor.component';
import { PriceComponent } from './navbar/price/price.component';
import { RegistrationComponent } from './navbar/registration/registration.component';
import { VehiclesComponent } from './navbar/vehicles/vehicles.component';
import { AdminComponent } from './profiles/admin/admin.component';
import { LoginComponent } from './navbar/login/login.component';
import { UserComponent } from './profiles/user/user.component';
import { CoursedataComponent } from './profiles/user/coursedata/coursedata.component';
import { CategoryComponent } from './profiles/admin/category/category.component';
import { LessonComponent } from './profiles/admin/lesson/lesson.component';
import { StudentsComponent } from './profiles/admin/students/students.component';
import { Subject } from 'rxjs';
import { SubjectsComponent } from './profiles/admin/subjects/subjects.component';
import { VehicleadminComponent } from './profiles/admin/vehicleadmin/vehicleadmin.component';
import { InstructorsComponent } from './profiles/admin/instructors/instructors.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full" ,redirectTo:  "index"},
  {path: "index",component: HomeComponent},
  {path: "am",component: AmComponent},
  {path: "b",component: BComponent},
  {path: "be",component: BComponent},
  {path: "c",component: CComponent},
  {path: "ce",component: CComponent},
  {path: "c1e",component: CComponent},
  {path: "d",component: DComponent},
  {path: "de",component: DComponent},
  {path: "d1",component: DComponent},
  {path: "d1e",component: DComponent},
  {path: "t",component: TComponent},
  {path: "price",component: PriceComponent},
  {path: "contact",component: ContactComponent},
  {path: "information",component: InformationComponent},
  {path: "instructor",component: InstructorComponent},
  {path: "vehicles",component: VehiclesComponent},
  {path: "coursedata",component: CoursedataComponent},
  {path: "category",component: CategoryComponent},
  {path: "instructors",component: InstructorsComponent},
  {path: "lesson",component: LessonComponent},
  {path: "students",component: StudentsComponent},
  {path: "subjects",component: SubjectsComponent},
  {path: "vehicleadmin",component: VehicleadminComponent},
  {path: "admin",component: AdminComponent},
  {path: "user",component: UserComponent},
  {path: "registration",component: RegistrationComponent},
  {path: "login",component: LoginComponent},
  {path: "logout",component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
