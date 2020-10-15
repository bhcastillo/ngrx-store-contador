import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styles: [
  ]
})
export class SonComponent implements OnInit {
  cont$:Observable<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
