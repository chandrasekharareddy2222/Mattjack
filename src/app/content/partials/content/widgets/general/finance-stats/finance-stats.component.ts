import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import {googlemaps} from 'googlemaps'

@Component({
  selector: 'm-finance-stats',
  templateUrl: './finance-stats.component.html',
  styleUrls: ['./finance-stats.component.scss']
})
export class FinanceStatsComponent implements OnInit {
  @ViewChild('gmap') gmapElement: ElementRef;
  public map: google.maps.Map= null;
  // google: any[];
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor() { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(this.lat, this.lng),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

}
