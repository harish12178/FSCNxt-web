import { Component, OnInit , ViewChild , AfterViewInit ,ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.css']
})
export class Dashboard1Component implements OnInit,AfterViewInit {

  map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 12.9048;
  lng = 77.6487;

  constructor() { }

  ngOnInit(): void {
  }
    ngAfterViewInit(): void {

      this.map = new mapboxgl.Map({
        container: 'map_element',
        accessToken : 'pk.eyJ1IjoiaGFyaXNoMTIxNzgiLCJhIjoiY2tkYTdwYWQ4MGZhYjMzcnhkZXBrcnI3MCJ9.XYmUhOQRUXDhC8GFb2g1nQ',
        style: this.style,
        zoom: 14,
        center: [this.lng, this.lat]
    });

  }
}
