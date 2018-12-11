import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getTasks();
  }

  public getTasks() {
    this.tasks$ = this.apiService.getTasks();
  }

}
