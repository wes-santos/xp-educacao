import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  imports: [],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent {
  hotelId: number | null = null;

  constructor (private route: ActivatedRoute){}

  ngOnInit() {
    this.hotelId = Number(this.route.snapshot.paramMap.get("id"));
    console.log("O id do hotel é: ", this.hotelId);
  }
}
