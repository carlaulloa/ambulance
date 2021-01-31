import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

/**
 * el control value accessor requiere un token
 */
@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    // forwardref traslada todo hacia el componente
    useExisting: forwardRef(() => PhotoComponent),
    multi: true
  }]
})
export class PhotoComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @ViewChild('photo') photo: ElementRef | null = null;
  @Input() photoByDefault: string = '';
  isOver = false;
  value: File | null = null;
  usingWebCam: boolean = false;
  checkedWebCam: boolean = false;

  triggerSnapshot: Subject<void> = new Subject<void>();

  onChange = (_: any) => { }
  onTouch = (_: any) => { }

  constructor() { }

  ngAfterViewInit(): void {
    if(this.photoByDefault){
      const pathPhoto = "/assets/img/" + this.photoByDefault;
      this.loadPhoto(pathPhoto);
    }
  }

  /**
   * cuando se escribe o modifica el campo
   * @param obj 
   */
  writeValue(value: File): void {
    if (value) {
      this.value = value;
    }
  }
  /**
   * se indica que el campo ha sido modificado
   * @param fn 
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * se indica que he estado sobre el campo, mas no que lo haya modificado
   * @param fn 
   */
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {
  }

  loadImage(data: File) {
    this.loadInDiv(data);
  }

  loadInDiv(file: File) {
    this.value = file;
    this.onChange(this.value);
    this.onTouch(this.value);
    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.loadPhoto(dataBase64);
    }
    fr.readAsDataURL(file)
  }

  loadPhoto(base64: string | ArrayBuffer) {
    (this.photo as ElementRef).nativeElement.innerHTML = "";
    (this.photo as ElementRef).nativeElement.style.backgroundImage = `url(${base64})`;
  }

  capturePhotoFromWebCam(webCamImage: WebcamImage){
    this.srcToFile(webCamImage.imageAsDataUrl)
      .then(file => this.loadInDiv(file));    
    this.usingWebCam = false;
    this.checkedWebCam = false;
  }

  srcToFile(src: string){
    return fetch(src)
      .then((res) => res.arrayBuffer())
      .then(buffer => new File([buffer], "avatar", { type: "image/jpg"}))
  }

  changeOriginPhoto(){
    this.usingWebCam = !this.checkedWebCam;
  }

  takePhoto(){
    this.triggerSnapshot.next();
  }

  triggerAsObservable(): Observable<void>{
    return this.triggerSnapshot.asObservable();
  }
}
