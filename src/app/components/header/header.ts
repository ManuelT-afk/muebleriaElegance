import { Component, AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';
declare const M: any;

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  menu = [
    {
      id: 1,
      img: '/img/mueble1.png',
      titulo: 'Sofa de cuarzo',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
    {
      id: 2,
      img: '/img/mueble2.png',
      titulo: 'Sofa blanco',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
    {
      id: 3,
      img: '/img/mueble3.png',
      titulo: 'Sofa de alta costura',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
    {
      id: 4,
      img: '/img/mueble4.png',
      titulo: 'Sofa delux',
      descripcion: 'Diseño de primera calidad de mueble',
      activo: true,
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      const slideMenus = document.querySelectorAll('.slider');
      M.Slider.init(slideMenus, {
        indeicators: true,
        duration: 500,
        interval: 5000,
      });
    });
  }
  titulo = 'Muebles de temporada';
  subtitulo = 'Colección elegante';
  slogan = 'Diseños para cada rincón de tu hogar';
}
