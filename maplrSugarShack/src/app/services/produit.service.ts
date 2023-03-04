import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../model/produit.model';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  private baseUrl = "http://localhost:8080"
  private headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : 'true' });
  constructor(private httpClient: HttpClient) { }

  getAllProduits(){
    return this.httpClient.get<Produit[]>(this.baseUrl + '/produits');
  }

  getProduitByTypeSirop(typeSiropNom: string): any {
    return this.httpClient.get<Produit[]>(this.baseUrl + '/produit/type/'+typeSiropNom);
  }
}
