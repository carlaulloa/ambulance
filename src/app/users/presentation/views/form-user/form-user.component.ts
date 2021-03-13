import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DriverEntity } from 'src/app/drivers/domain/driver.entity';
import { CustomValidators } from 'src/app/shared/utils/custom-validators';

@Component({
  selector: 'amb-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormUserComponent implements OnInit {

  title: string;
  group: FormGroup = new FormGroup({});

  // mat_dialog_data json que contiene el registro que se envia
  constructor(@Inject(MAT_DIALOG_DATA) private data: DriverEntity | any,
    private readonly reference: MatDialogRef<FormUserComponent>) {
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  ngOnInit(): void {
  }

  setForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      password: new FormControl(this.data ? this.data.password: null, Validators.required), 
      nombre: new FormControl(this.data ? this.data.nombre : null, Validators.required),
      correo: new FormControl(this.data ? this.data.correo : null, [Validators.required,
      CustomValidators.validatorEmail
      ]),
      activo: new FormControl(this.data ? this.data.activo : true)
    });
  }

  save() {
    if (this.group.valid) {
      const driver = this.group.getRawValue();
      this.reference.close(driver);
    } else {
      console.log("formulario no válido")
    }
  }

}
