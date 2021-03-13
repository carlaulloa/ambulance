import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DriverEntity } from 'src/app/drivers/domain/driver.entity';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormDriverComponent implements OnInit {

  title: string;
  group: FormGroup = new FormGroup({});
  
  // mat_dialog_data json que contiene el registro que se envia
  constructor(@Inject(MAT_DIALOG_DATA) private data: DriverEntity | any,
    private readonly reference: MatDialogRef<FormDriverComponent>) { 
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  ngOnInit(): void {
  }

  setForm(){
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      fullName: new FormControl(this.data ? this.data.fullName : null, Validators.required),
      license: new FormControl(this.data ? this.data.license : null, Validators.required),
    });
  }

  save(){
    if(this.group.valid){
      const driver = this.group.getRawValue();
      this.reference.close(driver);
    }else {
      console.log("formulario no válido")
    }
  }

}
