import { MatDialog } from '@angular/material/dialog';
import { PlotService } from './../../../shared/services/plot.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plot-form',
  templateUrl: './plot-form.component.html',
  styleUrls: ['./plot-form.component.css']
})
export class PlotFormComponent implements OnInit {

  titleAlert: string = 'This field is required';

  loading: boolean = false;

  formGroup!: FormGroup;

  post: any = '';

  constructor( private plotService: PlotService, 
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog)
  { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'validate': ''
    });
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  setChangeValidate() {
     
  }

  create(formData:any){
    this.plotService.createPlot(formData).subscribe(response=>{
     // this.snackBar.open('Plot added', '', { duration: 1000 ,panelClass: ['blue-snackbar'] ,  verticalPosition: 'top', horizontalPosition:'end' });
      /*setTimeout(()=>{  
        this.router.navigate(['/'])
      }, 2000);*/
      this.dialog.closeAll();
    },
    (error) => {
     // this.snackBar.open("Erreur", '', { duration: 1000, panelClass: ['red-snackbar'], verticalPosition: 'top', horizontalPosition:'end'});
    });
  }

}
