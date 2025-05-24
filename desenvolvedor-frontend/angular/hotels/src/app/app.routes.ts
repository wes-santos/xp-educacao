import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { authenticationGuard } from './authentication.guard';

export const routes: Routes = [
    {path: '', redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "hotels", component: HotelsComponent, canActivate: [authenticationGuard]},
    {path: "hotels/:id", component: HotelDetailsComponent, canActivate: [authenticationGuard]}
];
