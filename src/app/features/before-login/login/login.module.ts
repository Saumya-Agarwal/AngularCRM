import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, CommonModule, LoginRoutingModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class LoginModule {}
