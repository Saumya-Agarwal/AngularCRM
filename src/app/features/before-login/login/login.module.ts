import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularMaterialModule } from '../../../angular-material.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule, CommonModule, LoginRoutingModule, 
    AngularMaterialModule,
  ],
   
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}
