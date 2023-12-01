import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from 'src/app/interfaces/ApiResponse';
import { Driver } from 'src/app/interfaces/driver';
import { FormulaService } from 'src/app/services/formula.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  id : string;
  api!: ApiResponse;

  pilotos! : Driver[];

  constructor(private servi : FormulaService, private route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id')!;
    

  }

  ngOnInit() {
    this.servi.getOne(this.id).subscribe(

      (resp) => {

        this.api = resp;
        this.pilotos = this.api.MRData.DriverTable.Drivers
    });
  }

}
