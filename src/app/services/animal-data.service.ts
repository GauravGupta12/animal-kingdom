import {Injectable} from '@angular/core';
import {Animal} from '../models/animal.model';
import {PyramidRow} from '../models/pyramidRow.model';

@Injectable()
export class AnimalDataService{
    arrAnimals : Array<Animal>;
    data: Array<Animal> = [
        new Animal('Simba',1,'Lion','https://en.wikipedia.org/wiki/Lion'),
        new Animal('Fox',4,'Fox','https://en.wikipedia.org/wiki/Fox'),
        new Animal('Bunny',5,'Rabbit','https://en.wikipedia.org/wiki/Rabbit'),
        new Animal('Crocodile',2,'Crocodile','https://en.wikipedia.org/wiki/Crocodile'),
        new Animal('Fly',5,'Fly','https://en.wikipedia.org/wiki/Fly'),
        new Animal('Man',1,'Human','https://en.wikipedia.org/wiki/Human'),
        new Animal('Sebastian',4,'Frog','https://en.wikipedia.org/wiki/Frog'),
        new Animal('Snake',3,'Snake','https://en.wikipedia.org/wiki/Snake'),
        new Animal('Hyna',4,'Cat','https://en.wikipedia.org/wiki/Cat'),
        new Animal('Shark',1,'Shark','https://en.wikipedia.org/wiki/Shark'),
        new Animal('Wolf',3,'Wolf','https://en.wikipedia.org/wiki/Gray_wolf'),
        new Animal('Eagle',2,'Eagle','https://en.wikipedia.org/wiki/Eagle'),
        new Animal('Jackal',3,'Jackal','https://en.wikipedia.org/wiki/Jackal'),
        new Animal('Honey',5,'Deer','https://en.wikipedia.org/wiki/Deer'),
        new Animal('Cheetah',2,'Cheetah','https://en.wikipedia.org/wiki/Cheetah')
    ];

    getData(): Array<Animal>{
        return this.data;                
    }
}

export const Animal_ServiceProviders : Array<any> = [
    AnimalDataService
];

