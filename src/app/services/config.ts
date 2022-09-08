export class Config {
  private baseUrl:string;

  constructor(){
    this.baseUrl = 'http://localhost:3000';
  }

  getApiDomain(){
    return this.baseUrl;
  }
}
