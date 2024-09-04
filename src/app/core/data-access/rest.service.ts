import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url: string) {
    return this.http.get(url);
  }

  public post(url: string, data: any) {
    return this.http.post(url, data);
  }

  public put(url: string, data: any) {
    return this.http.put(url, data);
  }

  public delete(url: string) {
    return this.http.delete(url);
  }

  public patch(url: string, data: any) {
    return this.http.patch(url, data);
  }
}
