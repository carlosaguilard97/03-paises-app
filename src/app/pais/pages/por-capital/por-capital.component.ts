import { Component, Input, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  public country: RESTCountryResponse[] = []

  hayError: boolean = false;

  termino: string = "";

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe(paises => {
      this.country = paises;
      
    }, error => {
      this.hayError = true;
      this.country = [];
    });
    // this.termino = "";
  }


}
