import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm={
    producto:'RTX 4080TI',
    preico:10,
    existencias:10
  }

  constructor() {}

  ngOnInit(): void {
  }

  precioValido():boolean{
    return this.miFormulario?.controls.producto?.value < 0 && this.miFormulario?.controls.producto?.touched
  }

  nombreValido():boolean{
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched
  }
  // guardar(formulario:NgForm){
  guardar(){
    console.log('Posteo correcto')
    this.miFormulario.resetForm({
      precio: 0,
      existencias:0
    });
  }
}
