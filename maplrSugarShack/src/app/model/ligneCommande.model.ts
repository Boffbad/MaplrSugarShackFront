import { Produit } from './produit.model';
import { Commande } from './commande.model';

export class LigneCommande {
    id: number;
    produit : Produit;
    quantite : number;
    commande : Commande;
    prixUnitaire : number;

    constructor(produit: Produit, quantite: number, commande : Commande, prixUnitaire : number){
      this.id = 0;
      this.produit = produit;
      this.quantite = quantite;
      this.commande = commande;
      this.prixUnitaire = prixUnitaire;
    }
  }
  