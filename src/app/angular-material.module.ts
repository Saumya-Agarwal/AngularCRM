import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

const materialModules = [
    MatNativeDateModule,
    MatDatepickerModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
];

@NgModule({
    imports : [
        CommonModule,
        ...materialModules
    ],
    exports :  [
        ...materialModules
    ],
})

export class AngularMaterialModule { }