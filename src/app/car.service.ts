import { Injectable } from '@angular/core';
import {Car, Category} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(){
    return this.cars
  }

private cars:Car[] = [



  { brand: 'Toyota', model: 'RAV4', price: 160, isAvailable: true, category: Category.SUV },

  { brand: 'Honda', model: 'CR-V', price: 155, isAvailable: false, category: Category.SUV },

  { brand: 'Kia', model: 'Sportage', price: 145, isAvailable: true, category: Category.SUV },

  { brand: 'BMW', model: 'X5', price: 300, isAvailable: true, category: Category.SUV },  

  { brand: 'Mercedes', model: 'C-Class', price: 250, isAvailable: false, category: Category.Sedan },

  { brand: 'Audi', model: 'A4', price: 240, isAvailable: true, category: Category.Sedan },

  { brand: 'Toyota', model: 'Camry', price: 190, isAvailable: true, category: Category.Sedan },

  { brand: 'Skoda', model: 'Superb', price: 170, isAvailable: false, category: Category.Sedan },  

  { brand: 'Volkswagen', model: 'Golf', price: 120, isAvailable: true, category: Category.Kompakt },

  { brand: 'Renault', model: 'Megane', price: 110, isAvailable: true, category: Category.Kompakt },

  { brand: 'Peugeot', model: '308', price: 115, isAvailable: false, category: Category.Kompakt },

  { brand: 'Mazda', model: '3', price: 130, isAvailable: true, category: Category.Kompakt },  

 { brand: 'Porsche', model: '911', price: 600, isAvailable: true, category: Category.Sport },

  { brand: 'Chevrolet', model: 'Camaro', price: 400, isAvailable: false, category: Category.Sport },

  { brand: 'Ford', model: 'Mustang', price: 380, isAvailable: true, category: Category.Sport },

  { brand: 'Nissan', model: 'GT-R', price: 550, isAvailable: true, category: Category.Sport },  

  { brand: 'Fiat', model: 'Ducato', price: 140, isAvailable: false, category: Category.Dostawczy },

  { brand: 'Ford', model: 'Transit', price: 150, isAvailable: true, category: Category.Dostawczy },

  { brand: 'Renault', model: 'Master', price: 145, isAvailable: true, category: Category.Dostawczy },

  { brand: 'Volkswagen', model: 'Crafter', price: 155, isAvailable: false, category: Category.Dostawczy }



];
}
