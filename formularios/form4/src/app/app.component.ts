import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  conversion = '';
  potenciaNumero = '';
  cantidad = '';

  formularioConversion = new FormGroup({
    numerodecimal: new FormControl(),
    base: new FormControl('octal'),
    potenia: new FormControl('2'),
    largo: new FormControl(true)
  })

  submit() {
    if (this.formularioConversion.value.numerodecimal) {
      if (this.formularioConversion.value.base == "hexadecimal") {
        this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(16);
      } 

      if (this.formularioConversion.value.base == "octal") {
        this.conversion = parseInt(this.formularioConversion.value.numerodecimal).toString(8);
      }

      if (this.formularioConversion.value.numerodecimal && this.formularioConversion.value.potenia) {
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversion.value.numerodecimal), parseInt(this.formularioConversion.value.potenia)).toString();
      }

      if (this.formularioConversion.value.largo) {
        this.cantidad = this.formularioConversion.value.numerodecimal.length.toString();
      }
    }
  }
}
