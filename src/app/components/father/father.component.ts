import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../app.reducers';
import { DECREMENTAR, INCREMENTAR } from '../cont.actions';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styles: [
  ]
})
export class FatherComponent implements OnInit {
  cont$:Observable<number>;
  constructor(private store:Store<IAppState>) {
    this.cont$ = store.select('contador');
   }

  ngOnInit(): void {
  }
  incrementar(){
    
    this.store.dispatch(INCREMENTAR());
  }
  decrementar(){
    this.store.dispatch(DECREMENTAR());
  }

}
