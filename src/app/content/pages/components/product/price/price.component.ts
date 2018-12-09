import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

}
