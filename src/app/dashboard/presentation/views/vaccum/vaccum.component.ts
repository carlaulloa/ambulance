import { Component, OnInit } from '@angular/core';
import { SocketRepository } from 'src/app/dashboard/application/socket.repository';

@Component({
  selector: 'amb-vaccum',
  templateUrl: './vaccum.component.html',
  styleUrls: ['./vaccum.component.css']
})
export class VaccumComponent implements OnInit {
  view: any  = [500, 300];
  results: any [] = [{
    name: 'Rusa',
    value: 300
  }, {
    name: 'Americana',
    value: 450
  }]

  scheme: any = {
    domain: ["#0d47a1", "#42a5f5", "#90caf"]
  }

  legend = true
  legendPosition: any  = "above"
  legendTitle: string = "Vacunas"

  gradient  = true;

  doughnut = true


  constructor(
    private readonly socketService: SocketRepository
  ) { }

  ngOnInit(): void {
    this.socketService.listen('dataupdate')
      .subscribe(results => {
        console.log(results);
       // this.results = results;
      })
  }

}
