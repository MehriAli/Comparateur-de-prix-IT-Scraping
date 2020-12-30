import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrapingServiceService {

  constructor(private http: HttpClient) { }

  public findAll(){
    return this.http.get("http://localhost:8088/Laptop");
  }
  public findAllDesktop(){
    return this.http.get("http://localhost:8088/Desktop");
  }
  public findAllDisqExt(){
    return this.http.get("http://localhost:8088/DisqExt");
  }
  public findAllDisqInt(){
    return this.http.get("http://localhost:8088/DisqInt");
  }
  public findAllImprimante(){
    return this.http.get("http://localhost:8088/Imprimante");
  }
  public findAllPhotocopieur(){
    return this.http.get("http://localhost:8088/Photocopieur");
  }
  public findAllScanner(){
    return this.http.get("http://localhost:8088/Scanner");
  }
  public findAllServeur(){
    return this.http.get("http://localhost:8088/Serveur");
  }
  

}
