import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  a:number = 0;

  miFormulario: FormGroup = this.fb.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear'],
      ['Death Stading']
    ],Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);
  
  public get favoritosArra()  {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArra.push(this.fb.control(this.nuevoFavorito.value,Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i:number){
    this.favoritosArra.removeAt(i);
  }
}
