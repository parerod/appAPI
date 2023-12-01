import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  

  constructor() { }

  ngOnInit() {}

  @Input() driverId : string = "";
  @Input() permanentNumber: string= "";
  @Input() code: string= "";
  @Input() url: string= "";
  @Input() givenName: string = "";
  @Input() familyName: string = "";
  @Input() dateOfBirth: string= "";
  @Input() nationality: string= "";

}
