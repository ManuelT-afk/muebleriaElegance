import { Component } from '@angular/core';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen: string;
  disponible: boolean;
  nuevo: boolean;
}

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Silla de comedor',
      descripcion: 'Silla elegante para reuniones familiares y espacios modernos.',
      precio: 249,
      categoria: 'Comedor',
      imagen: '/img/mueble3.png',
      disponible: true,
      nuevo: true,
    },
    {
      id: 2,
      nombre: 'Sofá modular',
      descripcion: 'Diseño contemporáneo con amplio confort para la sala.',
      precio: 1290,
      categoria: 'Sala',
      imagen: '/img/mueble1.png',
      disponible: true,
      nuevo: false,
    },
    {
      id: 3,
      nombre: 'Mesa de centro',
      descripcion: 'Mesa funcional con acabado premium para decoraciones minimalistas.',
      precio: 670,
      categoria: 'Sala',
      imagen: '/img/mueble2.png',
      disponible: false,
      nuevo: true,
    },
    {
      id: 4,
      nombre: 'Escritorio moderno',
      descripcion: 'Espacio ideal para trabajar desde casa con estilo premium.',
      precio: 890,
      categoria: 'Oficina',
      imagen: '/img/mueble3.png',
      disponible: true,
      nuevo: false,
    },
    {
      id: 5,
      nombre: 'Cama king size',
      descripcion: 'Cama de descanso con estructura robusta y diseño acogedor.',
      precio: 1850,
      categoria: 'Dormitorio',
      imagen: '/img/mueble4.png',
      disponible: true,
      nuevo: true,
    },
    {
      id: 6,
      nombre: 'Armario de ropero',
      descripcion: 'Solución de almacenamiento elegante para habitaciones amplias.',
      precio: 1450,
      categoria: 'Dormitorio',
      imagen: '/img/mueble2.png',
      disponible: false,
      nuevo: false,
    },
    {
      id: 7,
      nombre: 'Mesa auxiliar',
      descripcion: 'Complemento versátil para salones, dormitorios y recibidores.',
      precio: 320,
      categoria: 'Decoración',
      imagen: '/img/mueble1.png',
      disponible: true,
      nuevo: true,
    },
    {
      id: 8,
      nombre: 'Butaca reclinable',
      descripcion: 'Comodidad extrema con materiales resistentes y acabados refinados.',
      precio: 740,
      categoria: 'Sala',
      imagen: '/img/mueble4.png',
      disponible: false,
      nuevo: true,
    },
  ];
}
