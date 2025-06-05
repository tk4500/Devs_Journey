import { HttpClient } from '@angular/common/http';
import { Explain } from './explain.component';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExplainService {

  id = signal<number>(0);
  constructor(private http: HttpClient) {}

  getExplain(level: number): Observable<Explain[]> {
    return this.http.get<Explain[]>(`levelexplain/${level}.json`);
  }
  setId(id: number) {
    this.id.set(id);
  }

}
