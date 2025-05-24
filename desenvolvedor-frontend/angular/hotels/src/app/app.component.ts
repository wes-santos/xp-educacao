import { Component, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotels';
  exibirInfoSecreta: boolean = true;
  hoteis: string[] = ["Hotel SP", "Hotel RJ", "Hotel MG", "Hotel SLC"];
  nomeHotel: ModelSignal<string> = model("Salt Lake Hotel");
 
  limparHoteis() {
    this.hoteis = [];
  }

  limparNgModel() {
    this.nomeHotel.set('');
  }

  exibirHotel() {
    console.log(this.nomeHotel);
  }

  atualizarHotel(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nomeHotel.set(input.value);
  }
}
