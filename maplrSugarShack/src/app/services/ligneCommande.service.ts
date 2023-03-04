import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produit } from '../model/produit.model';
import { LigneCommande } from '../model/ligneCommande.model';
@Injectable({
  providedIn: 'root'
})
export class LigneCommandeService {
  
  private baseUrl = "http://localhost:8080"
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private httpClient: HttpClient) { }

  getAllLigneCommande(){
    return this.httpClient.get<LigneCommande[]>(this.baseUrl + '/lignecommandes');
  }

  getLigneCommandesForCommande(id:number){
    return this.httpClient.get<LigneCommande[]>(this.baseUrl + '/lignecommande/panier/' + id)
  }

  insertProduitInCommande(produit:Produit, quantite : number){
    return this.httpClient.post<LigneCommande>(this.baseUrl + '/lignecommande/' + produit.id + '/'  + quantite, produit,  { headers: this.headers })
  }

  getLigneCommandesForCurrentCommande (){
    return this.httpClient.get<LigneCommande[]>(this.baseUrl + '/lignecommande/panier/current')
  }
 
  deleteLigneCommande(ligneCommande : LigneCommande){
    return this.httpClient.delete<LigneCommande>(this.baseUrl + '/lignecommande/' + ligneCommande.id)
  }

  updateLigneCommande(ligneCommande: LigneCommande){
    return this.httpClient.put<LigneCommande>(this.baseUrl+ '/lignecommande/'+ ligneCommande.id+ '/' + ligneCommande.quantite, ligneCommande, {headers: this.headers} )
  }
}
