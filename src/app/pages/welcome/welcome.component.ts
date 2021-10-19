import { Component, OnInit } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  todos: Todo[] = [
    { id: 1, title: 'Demo Ngrx 1', status: 'Processing' },
    { id: 2, title: 'Demo Ngrx 2', status: 'Done' },
    { id: 3, title: 'Demo Ngrx 3', status: 'Pending' },
    { id: 4, title: 'Demo Ngrx 4', status: 'Done' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
