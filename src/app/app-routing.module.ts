import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { RestaurantComponent } from './core/components/menu/restaurant/restaurant.component';
import { FormComponent } from './core/components/menu/restaurant/form/form.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'restaurant', component: RestaurantComponent },
      { path: 'form', component: FormComponent}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
