import { Component, OnInit, Input } from '@angular/core';
import {PyramidRow} from '../models/pyramidRow.model';
import {Animal} from '../models/animal.model';

@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
  @Input() animals: Array<Animal>;

  constructor() { }

  ngOnInit() {
  }

}
