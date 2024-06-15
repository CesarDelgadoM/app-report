import { Component, Input } from '@angular/core';
import { Restaurant } from '../../../../interfaces/restaurant';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  name: string = 'Default';
  typeCard: string = 'Restaurant';

  @Input() restaurant!: Restaurant;

  view(): void {
    console.log("view restaurant")
  }

  generateReport(): void {
    console.log("generate report restaurant")
  }

  branches(): void {
    console.log("view branches")
  }
}
