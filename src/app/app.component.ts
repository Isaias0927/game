import { Component } from '@angular/core';
interface Elemento{
  icono: string;
  nombre: string;
  ruta: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  elementos: Elemento[]=[
    {
      icono: 'newspaper-outline',
      nombre: 'Historia',
      ruta: '/historia'
    },
    {
      icono: 'game-controller-outline',
      nombre: 'Juego',
      ruta: '/juego'
    },
    {
      icono: 'diamond-outline',
      nombre: 'Atajos',
      ruta: '/atajos'
    },
    {
      icono: 'home-outline',
      nombre: 'Contacto',
      ruta: '/inicio'
    },
  ];
  constructor() {}
}
