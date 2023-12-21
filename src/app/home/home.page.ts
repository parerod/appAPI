import { Component } from '@angular/core';
import { FormulaService } from '../services/formula.service';
import { ApiResponse } from '../interfaces/ApiResponse';
import { Driver } from '../interfaces/driver';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  api! : ApiResponse;

  pilotos! : Driver[];

  loading: HTMLIonLoadingElement | undefined;


  constructor(private servi : FormulaService, private loadingCtrl: LoadingController) {}

  ngOnInit() {
    this.showLoading()

    

    
  }

  showLoading() {
    this.loadingCtrl.create({
      message: 'Cargando datos...'
    }).then(s => {
      this.loading = s;
      this.loading.present().then(f => {

        this.cargardatos();

      });
    }
    )

  }

  cargardatos() {

    const nuevoDrive : Driver = {
      driverId: String(null),
      permanentNumber: "32",
      code: "PEP",
      url : "kdfksdfsf",
      givenName : "Pepe",
      familyName : "Arenas",
      dateOfBirth : "14/10/04",
      nationality : "Spanish"
    };

    this.servi.post(nuevoDrive).subscribe(
      (resp) => {

      }
    );



    /*this.servi.put("abate",nuevoDrive).subscribe(
      (resp) => {
        

      }
    );*/

    /*this.servi.delete("abate").subscribe(

      (resp) => {
        console.log("He borrado a abate")
      }
    );*/

    //this.servi.post()

    this.servi.getAll().subscribe(

      (resp: ApiResponse) => {

        this.api = resp;
        this.pilotos = this.api.MRData.DriverTable.Drivers

        this.loading?.dismiss();


    });
  }
}
