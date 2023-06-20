import { Component, OnInit } from '@angular/core';

declare const mapboxgl: any;

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibWFuaWthbnRhLWsxMiIsImEiOiJjbGozM252OGcxNmpnM2VveGdjbWpsdm5jIn0.iN_KElHhR0LRPkRhy6rK7Q';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
      center: [-73.9777, 40.7648], // Set initial coordinates (Manhattan)
      zoom: 12, // Set initial zoom level
      pitch: 45,
      bearing: -17.6,
      antialias: true
    });
    map.on('style.load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;
      const labelLayerId = layers.find(
        (layer: { type: string; layout: { [x: string]: any; }; }) => layer.type === 'symbol' && layer.layout['text-field']
      ).id;

      // The 'building' layer in the Mapbox Streets
      // vector tileset contains building height data
      // from OpenStreetMap.
      map.addLayer(
        {
          id: 'add-3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#aaa',

            // Use an 'interpolate' expression to
            // add a smooth transition effect to
            // the buildings as the user zooms in.
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height'],
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height'],
            ],
            'fill-extrusion-opacity': 0.6,
          },
        },
        labelLayerId
      );
    });
  }
}
