import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent  implements OnInit {

  

  constructor() { }

  ngOnInit() {}

  @Input() driverId : string = "";
  @Input() givenName: string = "";
  @Input() familyName: string = "";

}
