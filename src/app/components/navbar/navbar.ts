import { Component, AfterViewInit } from '@angular/core';
declare const M : any;

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit {
  nombreEmpresa : String = "Muebleria Elegance"
  slogan : String = "Calidad ante todo precio"

  menuOpciones = [
    {
      nombre : "historia",
      icono : "../img/chair.png", 
      ruta : "./historia"
    },
    {
      nombre : "header",
      icono : "img/header",
      ruta : "./header"
    },
      {
      nombre : "productos",
      icono : "img/productos",
      ruta : "./productos"
    },
      {
      nombre : "promociones",
      icono : "img/promociones",
      ruta : "./promociones"
    }
  ]



  ngAfterViewInit(): void {
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav,{
      edge : 'left',
      draggable:true
    });
    
  }
}
