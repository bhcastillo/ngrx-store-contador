import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../app.reducers';
import { DIVIDIR, MULTIPLICAR } from '../cont.actions';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [
  ]
})
export class SonComponent implements OnInit {
  cont$:Observable<number>;
  constructor(private store:Store<IAppState>) {
    this.cont$ = this.store.select('contador');
   }

  ngOnInit(): void {
  }
  multiplicar(){
    this.store.dispatch(MULTIPLICAR({payload:2}));
  }
  dividir(){
    this.store.dispatch((DIVIDIR({payload:2})));
  }
}
