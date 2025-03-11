import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultado = '';
  nombre = '';
  dni = '';

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });

  submit() {
    if (this.formAlumno.value.nombre) {
      this.nombre = this.formAlumno.value.nombre;
    }

    if (this.formAlumno.value.dni) {
      this.dni = this.formAlumno.value.dni;
    }

    if (this.formAlumno.value.notas) {
      if (this.formAlumno.value.notas.nota1 && this.formAlumno.value.notas.nota2 && this.formAlumno.value.notas.nota3) {
        let nota1 = parseInt(this.formAlumno.value.notas.nota1);
        let nota2 = parseInt(this.formAlumno.value.notas.nota2);
        let nota3 = parseInt(this.formAlumno.value.notas.nota3);

        let sumaNotas = nota1 + nota2 + nota3;

        if (sumaNotas / 3 >= 5) {
          this.resultado = "El alumno " + this.nombre + " con DNI " + this.dni + " con una media de: " + (sumaNotas/3);
        } else {
          this.resultado = "El alumno " + this.nombre + " con DNI " + this.dni + " con una media de: " + (sumaNotas/3);
        }
      }
    }
  }
}
