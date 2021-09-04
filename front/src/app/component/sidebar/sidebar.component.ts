import { PlotListComponent } from './../plot/plot-list/plot-list.component';
import { PlotFormComponent } from './../plot/plot-form/plot-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  display = false;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  onPress() {
   
    this.display = !this.display;
  }

  newPLot() {
    this.dialog
      .open(PlotFormComponent, {
        width: '600px',
        disableClose: false, 
    
      })
     
  }

 plotList() {
    this.dialog
      .open(PlotListComponent, {
        width: '400px',
        disableClose: false,
      })
  }

}
