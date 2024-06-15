import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './handlers/error.handler';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from './components/menu/menu.component';
import { NavComponent } from './components/menu/nav/nav.component';
import { RestaurantComponent } from './components/menu/restaurant/restaurant.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from './components/menu/restaurant/card/card.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormComponent } from './components/menu/restaurant/form/form.component';

@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    MenuComponent,
    NavComponent,
    RestaurantComponent,
    CardComponent,
    FormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
