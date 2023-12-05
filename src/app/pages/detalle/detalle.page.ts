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

  piloto! : Driver[];

  constructor(private servi : FormulaService, private route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id')!;
    

  }

  ngOnInit() {
    this.servi.getOne(this.id).subscribe(

      (resp) => {

        this.api = resp;
        this.piloto = this.api.MRData.DriverTable.Drivers
        console.log("un solo piloto",this.piloto);
    });
  }

}
