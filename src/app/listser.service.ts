import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListserService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  onSave(pro: any[]) {
    // return this.http.post(this.url, pro);
    return this.http.put(this.url, pro);
  }
  onfetch() {
    return this.http.get(this.url);
  }
}
