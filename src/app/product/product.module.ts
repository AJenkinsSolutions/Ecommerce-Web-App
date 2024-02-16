import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [
    ProductListComponent,
    MatCardModule,
    FlexModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ProductModule { }
