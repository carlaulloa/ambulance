import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/*
Sanitizadores se indica que las rutas son confiables
*/

interface IIcon {
  name: string,
  path: string  
}
@Injectable({
  providedIn: 'root'
})
export class IconService {
  private iconsList: IIcon[] = [
    { name: 'logo', path: "../assets/icons/ambulancia.svg" },
    { name: 'medico', path: '../assets/icons/medico.svg' },
    { name: 'enfermero', path: '../assets/icons/enfermero.svg' },
    { name: 'historia', path: '../assets/icons/historia.svg' },
    { name: 'piloto', path: '../assets/icons/conductor.svg' },
    { name: 'usuario', path: '../assets/icons/programador.svg' },
    { name: 'reporte', path: '../assets/icons/reporte.svg' },
    { name: 'tarifa', path: '../assets/icons/tarifa.svg' },
    { name: 'tablero', path: '../assets/icons/tablero.svg' },
    { name: 'monitoreo', path: '../assets/icons/monitoreo.svg' }
  ];

  constructor(private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizier: DomSanitizer) {
      this.registerIcons();
    }

  registerIcons (): void {
    this.iconsList.forEach((icon: IIcon) => {
      this.matIconRegistry.addSvgIcon(icon.name, 
        this.domSanitizier.bypassSecurityTrustResourceUrl(icon.path)
      );
    })
  }
}
