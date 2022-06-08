import { Component, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = "";

  paises: RESTCountryResponse[] = [];
  
  constructor(private paisSerice: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){
    if (region === this.regionActiva){ return }
    this.regionActiva = region;
    this.paises = [];
    this.buscar();
  }

  getClassCss(region: string){
      return ( region === this.regionActiva ) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  buscar(){
    this.paisSerice.buscarRegion(this.regionActiva)
    .subscribe(
      (paises) => {
        this.paises = paises;
        console.log(this.paises);
      },
      (error) => {
        console.log(error);
        this.paises = [];
      }
    );
  }

}
