import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { RESTCountryResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  termino: string = "";

  @Input() placeholder: string = "Buscar...";

  @Output() onEnter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce.pipe(
      debounceTime(500)
    ).subscribe(termino => this.onDebounce.emit(termino));
  }

  buscar() {
    this.onEnter.emit(this.termino);
    this.termino = "";
  }

  teclaPresionada() {
    this.debounce.next(this.termino);
  }

}
