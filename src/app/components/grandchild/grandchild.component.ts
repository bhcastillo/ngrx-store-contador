import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styles: [
  ]
})
export class GrandchildComponent implements OnInit {
  cont$:Observable<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
