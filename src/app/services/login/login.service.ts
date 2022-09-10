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
  private auth!: any;

  constructor(
    public http: HttpClient
  ) {
    this.config = new Config;
    this.api_url = this.config.getApiDomain();
  }

  async setAuth(auth: string) {
    this.auth = auth;
    this.auth = this.auth.login + ':' + this.auth.senha
    this.auth = btoa(this.auth)
  }

  public headers() {
    this.config = new Config;
    this.url_serve = this.config.getApiDomain();
    return this.options;
  }

  public postLogin(controller: string): Observable<any> {
    this.headers();
    return this.http.post(`${this.url_serve}${controller}`, { headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + this.auth
    } });
  }

  public postCadastro(controller: string, data: any): Observable<any> {
    this.headers();
    return this.http.post(`${this.url_serve}${controller}`, data, { headers: {'Content-Type': 'application/json'}});
  }
}
