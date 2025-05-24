import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  imports: [RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  constructor(private readonly service: HotelsService) {
    this.service = service;
  }

  ngOnInit() {
    this.getHotels();
  }

  public getHotels() {
    return this.service.getHotels();
  }
}
