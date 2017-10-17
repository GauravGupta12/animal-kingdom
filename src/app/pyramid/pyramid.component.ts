import { Component, OnInit } from '@angular/core';
import {Pyramid} from '../models/pyramid.model';
import {PyramidRow} from '../models/pyramidRow.model';
import {Animal} from '../models/animal.model';
import { AnimalDataService } from '../services/animal-data.service';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  pyramid: Pyramid;
  animalData: Array<Animal>;

  constructor(private animalSvc: AnimalDataService) {
    
   }

  getData(){
    this.animalData = this.animalSvc.getData();
    console.log(this.animalData);
    for (var index = 1; index <= 5; index++) {
      let temp  = this.animalData.filter(item => item.pyramidLevel == index);
      console.log(temp);
      let pyramidRow = new PyramidRow(temp);   
      console.log(pyramidRow);
      this.pyramid.pyramidRows.push(pyramidRow);       
    }     
    console.log(this.pyramid.pyramidRows);
  }


  ngOnInit() {
    this.pyramid = new Pyramid();
    this.getData();
  }

}
