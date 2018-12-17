import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/task/`);
  }

  // Create a Task.
  public postTask(new_task: Task) {
    return this.http.post(`${this.API_URL}/task/`,new_task);
  }

  // Update a Task.
  public putTask(the_task: Task) {
    return this.http.put(`${this.API_URL}/task/${the_task.id}/`,the_task);
  }

  // Delete a Task.
  public deleteTask(task_id: number) {
    return this.http.delete(`${this.API_URL}/task/${task_id}/`);
  }
}
