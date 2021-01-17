import { Component, OnInit } from '@angular/core';
import { MedicUsecase } from 'src/app/medics/application/medic.usercase';

@Component({
  selector: 'amb-medics',
  templateUrl: './medics.component.html',
  styleUrls: ['./medics.component.css']
})
export class MedicsComponent implements OnInit {

  constructor(private readonly medicUsecase: MedicUsecase) { }

  ngOnInit(): void {
  }

  list(){
    this.medicUsecase.getAll().subscribe(data => console.log(data), err => console.log(err));
  }

}
