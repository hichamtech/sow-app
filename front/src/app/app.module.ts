
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './component/map/map.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaterialModule } from './material.module';
import { PlotListComponent } from './component/plot/plot-list/plot-list.component';
import { PlotFormComponent } from './component/plot/plot-form/plot-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidebarComponent,
    PlotListComponent,
    PlotFormComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
