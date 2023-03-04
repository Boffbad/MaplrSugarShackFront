import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import {Observable} from 'rxjs'
import { TypeSirop } from '../model/typeSirop.model';
import { TypeSiropService } from '../services/type-sirop.service';
import { LigneCommandeService } from '../services/ligneCommande.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listeProduitsObs: Observable<Produit[]> = new Observable();
  typeSiropNom = '0'
  listeTypesObs : Observable<TypeSirop[]> = new Observable();
  constructor(private produitService: ProduitService, private typeSiropService: TypeSiropService, private ligneCommandeService : LigneCommandeService) { }

  ngOnInit(): void {
    //Init de la liste des produits
    this.listeProduitsObs = this.produitService.getAllProduits()
    this.listeTypesObs = this.typeSiropService.getAllTypes()
  }

  ajouterProduit(produit:Produit,quantite : number):void{
    this.ligneCommandeService.insertProduitInCommande(produit, quantite).subscribe();
  }

  filterChange(typeSiropNom: string){
    if(typeSiropNom != '0'){
      this.listeProduitsObs = this.produitService.getProduitByTypeSirop(typeSiropNom)
    }else{
      this.listeProduitsObs = this.produitService.getAllProduits()
    }
    
  }
}
