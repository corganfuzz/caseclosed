import { Component, OnInit } from '@angular/core';
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  cases: any = [];

  constructor(private casesService: BackendApiService) { }

  ngOnInit() {

   this.casesService.getAllCases().subscribe(cases => {
     this.cases = cases;
   });

  }

}
