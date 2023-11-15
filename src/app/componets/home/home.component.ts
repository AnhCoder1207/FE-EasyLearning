import { Component, OnInit } from '@angular/core';
import { AppSerivce } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  product : any;
  constructor(private app: AppSerivce) {

  }
  ngOnInit(): void {
    this.app.product(6).subscribe((res: any) => {
      this.product = res;
    });
  }
}
