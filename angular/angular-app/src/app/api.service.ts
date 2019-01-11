import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';
import { AuthService } from './auth/auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient, private auth: AuthService) { }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/task/`,
            {
              headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            });
  }

  // Create a Task.
  public postTask(new_task: Task) {
    return this.http.post(`${this.API_URL}/task/`,new_task,
            {
              headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            });
  }

  // Update a Task.
  public putTask(the_task: Task) {
    return this.http.put(`${this.API_URL}/task/${the_task.id}/`,the_task,
            {
              headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            });
  }

  // Delete a Task.
  public deleteTask(task_id: number) {
    return this.http.delete(`${this.API_URL}/task/${task_id}/`,
            {
              headers: new HttpHeaders().set('Authorization', `Bearer ${this.auth.accessToken}`)
            });
  }
}
