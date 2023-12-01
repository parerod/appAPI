import { Component, inject, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent  implements OnInit {

  @Input() driverId : string = "";
  /*@Input() permanentNumber: string;
  @Input() code: string;
  @Input() url: string;*/
  @Input() givenName: string = "";
  @Input() familyName: string = "";
  /*@Input() dateOfBirth: string;
  @Input() nationality: string;*/

  constructor() { }

  ngOnInit() {}

}
