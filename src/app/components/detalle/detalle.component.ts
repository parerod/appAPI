import { Component, inject, Input, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Message } from './../../services/data.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  private platform = inject(Platform);
  @Input() message?: Message;
  

  constructor() { }

  ngOnInit() {}

}
