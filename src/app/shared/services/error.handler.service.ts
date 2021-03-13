import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar,
    private _zone: NgZone) { }

  openSnackBar(message: string, action: string) {
    this._zone.run(() => {
      this._snackBar.open(message, action, {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    })

  }

  handleError(error: any) {
    // do something with the exception
    console.log(error);
    this.openSnackBar(error.error.message, 'Error');
  }
}