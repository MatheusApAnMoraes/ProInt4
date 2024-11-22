import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./uni-caronas/cabecalho/cabecalho.component";
import { UniCaronasComponent } from "./uni-caronas/uni-caronas.component";
import { RodapeComponent } from "./uni-caronas/rodape/rodape.component";
import { FormsModule} from  '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, UniCaronasComponent, RodapeComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProInt4';
}
