import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  categories = ['SUV', 'Sedan', 'Kompakt', 'Sport', 'Dostawczy'];

  choosenCategory = "nic"
}
