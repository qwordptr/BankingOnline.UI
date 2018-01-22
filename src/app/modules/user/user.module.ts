import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      RegisterComponent, ProfileComponent, LoginComponent
  ],
  declarations: [RegisterComponent, ProfileComponent, LoginComponent]
})
export class UserModule { }
