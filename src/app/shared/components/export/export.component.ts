import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ExportUseCase } from '../../application/export.usecase';

@Component({
  selector: 'amb-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private readonly exportUsecase: ExportUseCase) { }

  ngOnInit(): void {
  }

  export(event: MouseEvent, option: string, action: string = ""): void {
    event.preventDefault();
    if(option === 'excel'){
      this.exportUsecase.exportToExcel(this.data, "Medicos", "Listado de Medicos");
    } else if(option == 'pdf'){
      this.exportUsecase.exportToPDF(this.data, 'Medicos', 'Medicos', action  );
    }
  }

}
