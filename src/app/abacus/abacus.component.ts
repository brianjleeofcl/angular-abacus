import { Component, OnInit } from '@angular/core';
import { Abacus } from '../abacus';

@Component({
  selector: 'app-abacus',
  templateUrl: './abacus.component.html',
  styleUrls: ['./abacus.component.css']
})
export class AbacusComponent implements OnInit {
  private abacus: Abacus;

  constructor() {
    this.abacus = new Abacus(5);
  }

  ngOnInit() {
  }

}
