import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'amb-page-lock-screen',
  templateUrl: './page-lock-screen.component.html',
  styleUrls: ['./page-lock-screen.component.css']
})
export class PageLockScreenComponent implements OnInit {
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
      'password': new FormControl()
    });
  }

  onload(){
    this.router.navigate(['/dashboard']);
  }

}
