import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = "";

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.onEnter.emit(this.termino);
    // this.termino = "";
  }

}
