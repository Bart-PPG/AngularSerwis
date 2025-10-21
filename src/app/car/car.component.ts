import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../car';
import { CarService } from '../car.service';
import { NgClass } from "../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

cars: Car[] = []

  constructor(private serwis:CarService){
    this.cars = serwis.getCars()
  }

  categories = ['SUV', 'Sedan', 'Kompakt', 'Sport', 'Dostawczy'];

  choosenCategory = "nic"
}
