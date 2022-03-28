import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from '../../../angular-material.module';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent],
  imports: [FormsModule, CommonModule, SignupRoutingModule,
    AngularMaterialModule,
    ],
     
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupModule {}
