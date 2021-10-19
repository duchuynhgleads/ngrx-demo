import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../todo";

@Component({
  selector: 'app-todo-mini-list',
  templateUrl: './todo-mini-list.component.html',
  styleUrls: ['./todo-mini-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoMiniListComponent implements OnInit {

  @Input() todos: Todo[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
