import { Component, OnInit } from '@angular/core';
import { LigneCommandeService } from '../services/ligneCommande.service';
import { LigneCommande } from '../model/ligneCommande.model';
import {Observable} from 'rxjs'
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  listeLigneCommandeObs: Observable<LigneCommande[]> = new Observable();
  listeLigneCommande : LigneCommande[] = [];
  total = 0;
  totalObs : Observable<number> = new Observable()
  constructor(private ligneCommandeService : LigneCommandeService,private commandeService : CommandeService) { }

  ngOnInit(): void {
    
    this.afficherListe()
  }

  deleteItemFromCommande(ligneCommande:LigneCommande){
    this.ligneCommandeService.deleteLigneCommande(ligneCommande).subscribe(()=>{this.afficherListe()});
    
  }

  afficherListe(){
    this.total = 0;
    this.listeLigneCommandeObs = this.ligneCommandeService.getLigneCommandesForCurrentCommande()
    this.listeLigneCommandeObs.subscribe((resListe) =>{
      this.listeLigneCommande = resListe;
      
      this.listeLigneCommande.forEach(element => {
        this.total += element.prixUnitaire * element.quantite
      });
    })
  }

  validerPanier(){
    if(this.listeLigneCommande.length != 0){
      this.commandeService.validerCommande(this.listeLigneCommande[0].commande.id, this.listeLigneCommande[0].commande).subscribe(()=> {
        this.afficherListe()
      })
      
    }else{
      alert("Panier vide, impossible de valider la commande.")
    }
  }
  ajouter(ligneCommande:LigneCommande){
    ligneCommande.quantite++;
    this.ligneCommandeService.updateLigneCommande(ligneCommande).subscribe(() =>{
    //refesh liste
    this.afficherListe()
    });
  }

  reduire(ligneCommande:LigneCommande){
    ligneCommande.quantite--;
    if(ligneCommande.quantite == 0){
      this.deleteItemFromCommande(ligneCommande)
    }else{
      this.ligneCommandeService.updateLigneCommande(ligneCommande).subscribe(() =>{
        //refesh liste
        this.afficherListe()
        });
    }
    
  }
}
