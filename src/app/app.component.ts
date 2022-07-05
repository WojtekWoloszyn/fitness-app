import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('Firebase deploy Consolelog');
  }
}
