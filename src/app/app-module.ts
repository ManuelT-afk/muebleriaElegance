import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';    

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Historia } from './components/historia/historia';
import { Productos } from './components/productos/productos';
import { Promociones } from './components/promociones/promociones';
import { Footer } from './components/footer/footer';

@NgModule({
  declarations: [App, Navbar, Header, Historia, Productos, Promociones, Footer],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App,Navbar,Header,Historia,Productos,Promociones,Footer],
})
export class AppModule {}
