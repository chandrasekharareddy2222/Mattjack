import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
