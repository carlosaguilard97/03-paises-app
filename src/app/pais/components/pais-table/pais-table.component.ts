import { Component, Input, OnInit } from '@angular/core';
import { RESTCountryResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.css']
})
export class PaisTableComponent implements OnInit {

  @Input() country: RESTCountryResponse[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
