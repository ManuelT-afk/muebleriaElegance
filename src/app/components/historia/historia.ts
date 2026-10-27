import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  standalone: false,
  templateUrl: './historia.html',
  styleUrl: './historia.css',
})
export class Historia implements AfterViewInit {
  acontecimientos = [
    {
      titulo: 'Inicios',
      año: 2000,
      descripcion: 'Esto es una de los comienzos que tiene la muebleria',  
    },
    {
      titulo: 'Expansion de forma regional',
      año: 2010,
      descripcion: 'SE INAUGURARON TRES SUCURSALES Y COMENZÓ LA DISTRIBUCIÓN A NIVEL METROPOLITANO',  
    },
    {
      titulo: 'Lanzamiento de forma digital',
      año: 2020,
      descripcion: 'IMPLEMENTACIÓN DE LA PLATAFORMA DE COMERCIO ELECTRÓNICO Y ENVÍOS NACIONALES',  
    },
    {
      titulo: 'La actualidad',
      año: 2026,
      descripcion: 'TRANSICIÓN COMPLETA A MATERIALES ECOLÓGICOS Y CERTIFICACIÓN DE CALIDAD VERDE.',  
    },
  ];

  añoReciente = 2026;

  ngAfterViewInit(): void {
   
  }
}
