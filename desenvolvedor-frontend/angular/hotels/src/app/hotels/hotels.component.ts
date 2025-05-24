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
    this.requestLocation();
    this.requestNotification();
    this.persistHotelsDb();
  }

  public getHotels() {
    return this.service.getHotels();
  }


  public requestLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(
        "The coordenates are: ",
        position.coords.latitude,
        position.coords.longitude
      );
    })
  }

  public requestNotification() {
    Notification.requestPermission()
    .then((result) => {
      if (result === "granted") {
        console.log("Permission granted!");
      }
    });
  }

  public persistHotelsDb() {
    const request = indexedDB.open("hotels", 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      if (!db.objectStoreNames.contains("hotels")){
        db.createObjectStore("hotels", { keyPath: "id" });
        console.log("Hotels table created with success!");
      }
    }

    request.onsuccess = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;

      const transaction = db.transaction(["hotels"], "readwrite");
      const store = transaction.objectStore("hotels");
      const hotel = {id: 1, name: "Hotel XPE", status: true}
      store.add(hotel);

      transaction.oncomplete = () => {
        console.log("Hotel added with success!");
      }

      transaction.onerror = (err) => {
        console.error("Error adding hotel: ", err)
      }
    }

    request.onerror = (err) => {
      console.error("Error openning DB: ", err)
    }
  }
}
