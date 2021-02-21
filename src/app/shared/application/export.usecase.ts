import { Injectable } from "@angular/core";
import { ExportRepository } from "../infraestructure/export.repository";

@Injectable()
export class ExportUseCase {

  constructor(private exportService: ExportRepository){

  }

  exportToExcel(ccontent: any[], bookName: string, sheetName: string): void {
    this.exportService.exportToExcel(ccontent, bookName, sheetName);
  }

  exportToPDF(content: any[], title: string, fileName: string, action: string): void {
    this.exportService.exportToPDF(content, title, fileName, action);
  }

}