import { Component, OnChanges, Input } from '@angular/core';
import { Rod } from '../rod';

@Component({
  selector: 'app-rod',
  templateUrl: './rod.component.html',
  styleUrls: ['./rod.component.css']
})
export class RodComponent implements OnChanges {
  @Input() rod: Rod;

  constructor() { }

  ngOnChanges() {
  }
}
