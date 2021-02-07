import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private readonly configService: ConfigService,
    private readonly router: Router) { 
    this.configService.config = {
      layout: {
        menu: {
          hidden: true
        },
        header: {
          hidden: true
        }
      }
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email' : new FormControl(),
      'password': new FormControl()
    });
  }

  enter(){
    this.router.navigate(['/dashboard']);
  }

}
