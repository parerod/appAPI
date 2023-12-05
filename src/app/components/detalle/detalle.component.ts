import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() driverId : string | undefined = "";
  @Input() permanentNumber: string | undefined= "";
  @Input() code: string | undefined= "";
  @Input() url: string | undefined= "";
  @Input() givenName: string | undefined = "";
  @Input() familyName: string | undefined = "";
  @Input() dateOfBirth: string | undefined= "";
  @Input() nationality: string | undefined= "";

  constructor() { }

  ngOnInit() {

    console.log("componente",this.driverId)
  }

  

}
