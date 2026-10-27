import { Component, OnInit, AfterViewInit, signal } from '@angular/core';
import $ from 'jquery';
declare var M : any; 

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit, AfterViewInit  {
  ngAfterViewInit(): void {
    M.Slider.init(document.querySelectorAll('.slider'));
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
  }
  ngOnInit(): void {
  console.log('jQuery disponible:', $.fn.jquery);  
  }
  protected readonly title = signal('decoracion');
  historia = "Historia"
  productos = "Productos"
  promociones = "Promociones"

}