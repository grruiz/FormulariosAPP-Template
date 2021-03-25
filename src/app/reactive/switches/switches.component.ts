import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit  {


  miFormulario:FormGroup = this.fb.group({
    genero:[ 'M',Validators.required ],
    notificaciones:['M',Validators.required],
    condiciones:[false,Validators.requiredTrue]
  });

  persona ={
    genero:'F',
    notificaciones:false
  }

  constructor(private fb:FormBuilder) { }


  ngOnInit(){
    this.miFormulario.reset(
      {
        ...this.persona,
        condiciones:false
      });

      // this.miFormulario.get('condiciones')?.valueChanges.subscribe(newValue=>{
      //   {
      //     console.log(newValue);
      //   }
      // })

      this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) => {
        // delete form.condiciones;
        console.log(rest);
      })
  }

  guardar(){
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
