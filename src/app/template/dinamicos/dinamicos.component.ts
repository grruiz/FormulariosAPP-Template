import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favoritos[];
}

interface Favoritos{
  id:number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  {

  nuevoJuego:string='';
  persona:Persona =
    {
      nombre:'Rafael',
      favoritos:[
        {id:1,nombre:'Metal Gear'},
        {id:2,nombre:'Me lo invento'},
      ]
    }
  
  eliminar(index:number){
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego(){
    const nuevoJuegoFavorito: Favoritos ={
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoJuegoFavorito});
    this.nuevoJuego = '';
  }


  guardar(){

  }
  
}
