import { Component } from '@angular/core';
import { FormulaService } from '../services/formula.service';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Driver } from '../interfaces/driver';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  api! : ApiResponse;

  pilotos! : Driver[];

  constructor(private servi : FormulaService) {}

  ngOnInit() {
    this.servi.getAll().subscribe(

      (resp) => {

        this.api = resp;

    });

    this.pilotos = this.api.MRData.DriverTable.Drivers
  }

}
