import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  standalone: false,
  templateUrl: './historia.html',
  styleUrl: './historia.css',
})
export class Historia implements AfterViewInit {
  titulo = 'Nuestra Historia';

  acontecimientos = [
    {
      titulo: 'Inicios',
      year: 2000,
      descripcion: 'Esto es una de los comienzos que tiene la muebleria',
    },
    {
      titulo: 'Expansion de forma regional',
      year: 2010,
      descripcion: 'SE INAUGURARON TRES SUCURSALES Y COMENZÓ LA DISTRIBUCIÓN A NIVEL METROPOLITANO',
    },
    {
      titulo: 'Lanzamiento de forma digital',
      year: 2020,
      descripcion: 'IMPLEMENTACIÓN DE LA PLATAFORMA DE COMERCIO ELECTRÓNICO Y ENVÍOS NACIONALES',
    },
    {
      titulo: 'La actualidad',
      year: 2026,
      descripcion: 'TRANSICIÓN COMPLETA A MATERIALES ECOLÓGICOS Y CERTIFICACIÓN DE CALIDAD VERDE.',
    },
  ];

  yearRecent = 2026;

  ngAfterViewInit(): void {}
}
