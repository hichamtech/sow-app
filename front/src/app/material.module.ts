import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from "@angular/material/snack-bar";

@NgModule({
  imports: [
     MatDialogModule,
     MatInputModule,
      MatButtonModule,
       MatCardModule, 
       MatFormFieldModule,
       MatDialogModule,
       MatTableModule,
       MatInputModule,
       MatTableModule,
       MatPaginatorModule,
       MatSortModule,
       MatSelectModule,
       MatButtonModule,

       
      ],
  exports: [
    MatDialogModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
   
  ]
})

export class MaterialModule {}
