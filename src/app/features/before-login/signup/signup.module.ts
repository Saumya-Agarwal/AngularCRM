import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [FormsModule, CommonModule, SignupRoutingModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatIconModule],
})
export class SignupModule {}
