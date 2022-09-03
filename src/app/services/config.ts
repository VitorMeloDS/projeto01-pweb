export class Config {
  private baseUrl:string;

  constructor(){
    this.baseUrl = 'http://localhost:3030';
  }

  getApiDomain(){
    return this.baseUrl;
  }
}
