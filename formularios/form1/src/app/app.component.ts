import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  art = {
    id: 0,
    descripcion: "",
    precio: 0
  }

  articulos = [{ id: 1, descripcion: 'papas', precio: 10.55 },
    { id: 2, descripcion: 'manzanas', precio: 12.10 },
    { id: 3, descripcion: 'melon', precio: 52.30 },
    { id: 4, descripcion: 'cebollas', precio: 17 },
    { id: 5, descripcion: 'calabaza', precio: 20 },
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(id: number) {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].id == id) {
        this.articulos.splice(i, 1);
        return;
      }
    }
  }

  agregar() {
    if(this.art.id == 0) {
      alert("Debe ingresar un código de articulo destinto a cero");
      return;
    }

    for(let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].id == this.art.id) {
        alert('ya existe un articulo como dicho codigo');
        return;
      } else {
        this.articulos.push({
          id: this.art.id,
          descripcion: this.art.descripcion,
          precio: this.art.precio
        });
      } 
      this.art.id = 0;
      this.art.descripcion = '';
      this.art.precio = 0;
    }
  }

  seleccionar(art: { id: number; descripcion: string; precio: number; }) {
    this.art.id = art.id;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar() {
    for(let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].id = this.art.id) {
        this.articulos[i].descripcion = this.art.descripcion;
        this.articulos[i].precio = this.art.precio;
        return;
      }

      alert('No existe el codigo de articulo ingresado')
    }
  }

}