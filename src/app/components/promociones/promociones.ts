import { Component } from '@angular/core';

export interface Promocion {
  titulo: string;
  descripcion: string;
  descuento: number;
  vigente: boolean;
  imagen: string;
}

@Component({
  selector: 'app-promociones',
  standalone: false,
  templateUrl: './promociones.html',
  styleUrl: './promociones.css',
})
export class Promociones {
  mostrarVigentes = true;

  promociones: Promocion[] = [
    {
      titulo: 'Descuento en salas',
      descripcion: 'Aprovecha hasta un 25% de descuento en salas modernas.',
      descuento: 25,
      vigente: true,
      imagen: '/img/mueble1.png',
    },
    {
      titulo: 'Promoción de dormitorio',
      descripcion: 'Bajo en colchones y armarios para renovar tu habitación.',
      descuento: 30,
      vigente: false,
      imagen: '/img/mueble4.png',
    },
    {
      titulo: 'Oferta en comedor',
      descripcion: 'Descuentos especiales en mesas y sillas de comedor.',
      descuento: 20,
      vigente: true,
      imagen: '/img/chair.png',
    },
    {
      titulo: 'Lanzamiento de oficina',
      descripcion: 'Nuevos diseños para espacios de trabajo en casa.',
      descuento: 15,
      vigente: true,
      imagen: '/img/mueble3.png',
    },
  ];

  get promocionesFiltradas(): Promocion[] {
    return this.mostrarVigentes
      ? this.promociones.filter((promo) => promo.vigente)
      : this.promociones;
  }

  alternarPromociones(): void {
    this.mostrarVigentes = !this.mostrarVigentes;
  }
}
