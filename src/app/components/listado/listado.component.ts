import { Component, inject, Input, OnInit } from '@angular/core';
import { Driver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent  implements OnInit {

  @Input() piloto?: Driver;

  constructor() { }

  ngOnInit() {}

}
