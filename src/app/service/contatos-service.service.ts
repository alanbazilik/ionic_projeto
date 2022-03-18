import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatosServiceService {

 
  urlApi = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) {}
    getContatos(){
      return this.http.get(`${this.urlApi}/Contatos`);
    }
   saveContatos(Contato){
   return this.http.post(`${this.urlApi}/Contato`, Contato);
   }

}
