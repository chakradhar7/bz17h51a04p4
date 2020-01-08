import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { ColorComponent } from './color/color.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: " ",component: HomeComponent},
  {path: "Colors",component: ColorComponent},
  {path: "users",component: UsersComponent},
  {path: "Countries",component: CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
