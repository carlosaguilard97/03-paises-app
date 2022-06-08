import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTCountryResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private _apiUrl: string = 'https://restcountries.com/v3.1'

  get params() {
    return new HttpParams().set('fields', 'name,capital,population,flags,cca2,cca3,region,latlng,timezones,currencies,languages');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<RESTCountryResponse[]>{
    const url = `${this._apiUrl}/name/${termino}`;
    return this.http.get<RESTCountryResponse[]>(url, {params: this.params});
  }

  buscarCapital(termino: string): Observable<RESTCountryResponse[]>{
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.http.get<RESTCountryResponse[]>(url, {params: this.params});
  }

  getPaisPorCodigo(codigo: string): Observable<RESTCountryResponse[]>{
    const _fields = 'name,capital,population,flags,cca2,cca3,region,latlng,timezones,currencies,languages';
    const url = `${this._apiUrl}/alpha/${codigo}`;
    // console.log(url);
    return this.http.get<RESTCountryResponse[]>(url);
  }

  buscarRegion(region: string): Observable<RESTCountryResponse[]>{
    const url = `${this._apiUrl}/region/${region}`;
    return this.http.get<RESTCountryResponse[]>(url, {params: this.params});
  }
}
