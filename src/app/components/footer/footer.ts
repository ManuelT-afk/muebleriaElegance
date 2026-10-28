import { Component } from '@angular/core';

export interface RedSocial {
  nombre: string;
  icono: string;
  enlace: string;
}

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  anioActual = new Date().getFullYear();
  nombreEmpresa = 'Mueblería Elegance';

  redesSociales: RedSocial[] = [
    { nombre: 'Facebook', icono: 'fa-facebook-f', enlace: 'https://www.facebook.com' },
    { nombre: 'Instagram', icono: 'fa-instagram', enlace: 'https://www.instagram.com' },
    { nombre: 'TikTok', icono: 'fa-tiktok', enlace: 'https://www.tiktok.com' },
    { nombre: 'Pinterest', icono: 'fa-pinterest-p', enlace: 'https://www.pinterest.com' },
  ];
}
