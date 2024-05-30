import { Component } from '@angular/core';
import { Celular } from './types/Celular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fundamentos-angular';
}

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas/renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas/renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: "Celular XL", descricao: "Um celular grande", esgotado: false },
    { id: 2, nome: "Celular Normal", esgotado: false },
    { id: 3, nome: "Celular Mini", descricao: "Um celular pequeno", esgotado: true },
  ];

}
