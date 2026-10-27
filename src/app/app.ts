import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import $ from 'jquery';
declare const M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    const init = () => {
      const sidenav = document.querySelectorAll('.sidenav');

      if (typeof M !== 'undefined' && sidenav.length > 0) {
        M.AutoInit();
        M.Sidenav.init(sidenav, { edge: 'left' });
        return;
      }

      setTimeout(init, 100);
    };

    init();
  }
  ngOnInit(): void {
    console.log('jQuery disponible:', $.fn.jquery);
  }

  protected readonly title = signal('decoracion');
  navbar = 'mueble';
  header = 'Muebles';
  historia = 'Historia';
  productos = 'Productos';
  promociones = 'Promociones';
  footers = 'RedesSociales';
}