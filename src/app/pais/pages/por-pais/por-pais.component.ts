import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  public country: RESTCountryResponse[] = []

  hayError: boolean = false;

  termino: string = "";

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(paises => {
      this.country = paises;
      localStorage.setItem('paises', JSON.stringify(paises));
    }, error => {
      this.hayError = true;
      this.country = [];
    });
    this.termino = "";
  }
}
