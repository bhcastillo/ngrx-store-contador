import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../app.reducers';
import { RESET } from '../cont.actions';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: [
  ]
})
export class GrandchildComponent implements OnInit {
  cont$:Observable<number>;
  constructor(private store:Store<IAppState>) {
    this.cont$ = store.select('contador');
   }

  ngOnInit(): void {
  }
  resetear(){
    this.store.dispatch(RESET());
  }
}
