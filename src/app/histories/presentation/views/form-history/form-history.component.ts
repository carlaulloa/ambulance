import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HistoryEntity } from 'src/app/histories/domain/history.entity';

@Component({
  selector: 'amb-form-history',
  templateUrl: './form-history.component.html',
  styleUrls: ['./form-history.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormHistoryComponent implements OnInit {

  title: string;
  group: FormGroup = new FormGroup({});
  
  // mat_dialog_data json que contiene el registro que se envia
  constructor(@Inject(MAT_DIALOG_DATA) private data: HistoryEntity | any,
    private readonly reference: MatDialogRef<FormHistoryComponent>) { 
    this.title = data ? 'Edición' : 'Nuevo';
    this.setForm();
  }

  ngOnInit(): void {
  }

  setForm(){
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      name: new FormControl(this.data ? this.data.name : null, Validators.required),
    });
  }

  save(){
    if(this.group.valid){
      const history = this.group.getRawValue();
      this.reference.close(history);
    }else {
      console.log("formulario no válido")
    }
  }
}
