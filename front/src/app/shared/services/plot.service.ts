import { Plot } from './../models/plot.interface';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlotService {

private hostUrl = environment.hostURL;
constructor(private http: HttpClient) {}

  createPlot(formData:any){
    return this.http.post(`${this.hostUrl}/plot/create/`, formData);
  }

  listPlot(){
    return this.http.get<Plot[]>(`${this.hostUrl}/plot/`);
  }
 
  updatePlot(formData:any){
    return this.http.put(`${this.hostUrl}/plot/update/`, formData);
  }

  deletePlot(id:number){
    return this.http.put(`${this.hostUrl}/plot/delete/`, id);

  }

}
