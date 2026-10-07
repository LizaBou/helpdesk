import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private http = inject(HttpClient);
  message = signal('Chargement...');

  constructor() {
    this.http.get<{ message: string }>('/api/hello')
      .subscribe(r => this.message.set(r.message));
  }
}
