import {Animal} from './animal.model';

export class PyramidRow{   
    animals : Array<Animal>
    constructor( animals : Array<Animal>){
        this.animals = animals;
    }
}