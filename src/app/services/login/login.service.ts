import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from '../config';

@Injectable()
export class AuthService {
  public usuario: any;
  private config: Config;
  api_url: string;
  options: any;
  url_serve!: string;
  private auth!: string;

  constructor(
    public http: HttpClient
  ) {
    this.config = new Config;
    this.api_url = this.config.getApiDomain();
  }

  setAuth(auth: string) {
    this.auth = auth;
  }

  public headers() {
    this.options = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.auth
    });
    this.config = new Config;
    this.url_serve = this.config.getApiDomain() + '/api/';
    return;
  }

  protected get(controller: string): Observable<any> {
    this.headers();
    return this.http.get(`${this.url_serve}${controller}`, { headers: this.options });
  }



}
