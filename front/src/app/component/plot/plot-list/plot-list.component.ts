import { Plot } from './../../../shared/models/plot.interface';
import { PlotService } from './../../../shared/services/plot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plot-list',
  templateUrl: './plot-list.component.html',
  styleUrls: ['./plot-list.component.css']
})
export class PlotListComponent implements OnInit {

  displayedColumns  :  string[] = ['name']
  plots: Plot[] = [];
  constructor( private plotService: PlotService) { }

  ngOnInit(): void {
    this.loadPlot()
    console.log(this.loadPlot())
  }

  loadPlot(){
    this.plotService.listPlot()
    .subscribe((res: Plot[]) => this.plots = res);
  }
}
