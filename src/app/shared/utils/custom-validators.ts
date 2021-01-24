import { FormControl } from "@angular/forms";

export class CustomValidators {
  static validatorEmail(control: FormControl): { [s:string]: boolean } | null {
    /*if(control || !control.value){
      return null;
    }
    const value = control.value;
    if(value.match("regex"))
    return { "emailInvalid": true }*/
    return null;
  }
}