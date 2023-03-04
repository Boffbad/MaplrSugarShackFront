import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Commande } from '../model/commande.model';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private baseUrl = "http://localhost:8080"
  private headers = new HttpHeaders({  
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE', });
  constructor(private httpClient: HttpClient) { }

  getAllCommandes() {
    return this.httpClient.get<Commande[]>(this.baseUrl + '/commandes');
  }

  validerCommande(id: number,commande:Commande){
    return this.httpClient.put<Commande>(this.baseUrl + "/commande/valider/"+id,commande,{ headers: this.headers });
  }
}
