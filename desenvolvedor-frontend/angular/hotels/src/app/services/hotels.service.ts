import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

interface DummyJsonResponse {
  status: string;
  method: string;
}

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  constructor(private readonly httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getHotels() {
    this.httpClient
      .get<DummyJsonResponse>("https://dummyjson.com/test")
      .pipe(
        catchError(error => {
          console.error("Error: ", error);
          return throwError(() => new Error(error));
        }),
        map(res => res.status)
      ) // Manipulate API response before processing.
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error("Error: ", e),
        complete: () => console.log("Request completed")
      }); // Process API result.
  }
}
