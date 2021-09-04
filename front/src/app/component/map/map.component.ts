import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
// @ts-ignore
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

 
selectedLngLat!: mapboxgl.LngLat;

  map!: mapboxgl.Map
  style = 'mapbox://styles/mapbox/satellite-v9';
  lat = 37.75;
  lng = -122.41;

  constructor() {
   }

  ngOnInit() { 
  this.loadFullMap();
  }

  loadFullMap(){
    this.initMap();
    this.drawTools();
    this.mapBoxDraw();
  }
  
  onClickPolygone(){

    var map = this.initMap();

    map.on('click','layer', (e) => {
      
      console.log(e.lngLat)
      console.log(e.features)
      });
  }

  drawTools(){
    var map = this.initMap();
    var draw = this.mapBoxDraw();
    
    map.on('load', function() {
      map.addControl(draw);
   });

  }

  mapBoxDraw(){
  var map = this.initMap();
  var draw = new MapboxDraw({
    displayControlsDefault: true,
    defaultMode: 'draw_polygon'

  });

  map.on('load', function() {   
          
  map.on('mouseenter', 'states-layer', () => {
  map.getCanvas().style.cursor = 'pointer';
            });

  map.on('mouseleave', 'states-layer', () => {
  map.getCanvas().style.cursor = '';
            });
  map.addControl(draw);

  });

  return draw;
}

initMap(){
  var map = new mapboxgl.Map({
      accessToken:environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      center: [9, 48.5], 
      zoom: 5  
      });

     return map; 
  }

}
