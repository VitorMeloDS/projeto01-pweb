export class Config {
  private baseUrl: string;

  constructor(){
    this.baseUrl = 'http://localhost:5400';
  }

  getApiDomain(){
    return this.baseUrl;
  }
}
