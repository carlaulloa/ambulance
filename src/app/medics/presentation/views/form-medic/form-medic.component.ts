import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { CustomValidators } from 'src/app/shared/utils/custom-validators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'amb-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None
  // emulated - significa que solo existe dentro del componente
  // none - el estilo puede afectar a mas elementos, puede ayudar cuando se usa bootstrap
  //  tambien se puede usar selectores descendentes 
  // shadowDom - 
})
export class FormMedicComponent implements OnInit {
  title: string;
  group: FormGroup = new FormGroup({});
  photoToShow: string = 'medico.jpg';

  // mat_dialog_data json que contiene el registro que se envia
  constructor(@Inject(MAT_DIALOG_DATA) private data: MedicEntity | any,
    private readonly reference: MatDialogRef<FormMedicComponent>) { 
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  ngOnInit(): void {
  }

  setForm(){
    /*const listFields = [
      {name: "id", value: 20, validators: []}
    ]

    const controls = listFields.reduce((accum: any, ctrl: any) => {
      if(!accum[ctrl.name]){
        accum[ctrl.name] = new FormControl(ctrl.value)
      }
      return accum;
    }, {});

    this.group = new FormGroup(controls);
    */
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      name: new FormControl(this.data ? this.data.name : null, Validators.required),
      surname: new FormControl(this.data ? this.data.surname : null, Validators.required),
      email: new FormControl(this.data ? this.data.email : null, [
        Validators.required,
        CustomValidators.validatorEmail,
      ]),
      lastname: new FormControl(this.data ? this.data.lastname : null),
      dni: new FormControl(this.data ? this.data.dni : null, Validators.required),
      cmp: new FormControl(this.data ? this.data.cmp : null, Validators.required)
    });

    if(this.data){
      const url = `${environment.pathAPI}/photos/${this.data.photo}`;
      const fileName = this.data.photo;
      fetch(url)
        .then(async (response) => {
          const blob = await response.blob();
          const file = new File([blob], fileName)
          this.group.patchValue({ photo: file });
        })
        this.group.addControl('photo', new FormControl(null));
        this.photoToShow = this.data.photo;
    } else {
      const url = `${environment.pathAPI}/photos/${this.photoToShow}`;
      const fileName = this.photoToShow;
      fetch(url)
        .then(async (response) => {
          const blob = await response.blob();
          const file = new File([blob], fileName)
          this.group.patchValue({ photo: file });
        })
      this.group.addControl('photo', new FormControl(null, /*,  Validators.required*/));
    }
  }

  save(){
    if(this.group.valid){
      const medic = this.group.getRawValue();
      const fd: FormData = new FormData();
      fd.append('nombre', medic.name);
      fd.append('segundo_nombre', medic.lastname);
      fd.append('apellido', medic.surname);
      fd.append('cmp', medic.cmp);
      fd.append('dni', medic.dni);
      fd.append('correo', medic.email);
      fd.append('foto', medic.photo);
      console.log(fd);
      this.reference.close(fd);
    }else {
      console.log("formulario no válido")
    }
  }

  /*
  validatorEmail(control: FormControl): {[s:string]: boolean}{
    if(control || !control.value){
      return null;
    }
    const value = control.value;
    if(value.match("regex"))
    return { "emailInvalid": true }

  } */

}
