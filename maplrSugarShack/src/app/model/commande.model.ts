import { Produit } from './produit.model';
import { StatutCommande } from './statutCommande.model';

export class Commande {
    id: number;
    statutCommande : StatutCommande

    constructor(statutCommande : StatutCommande){
      this.id = 0;
      this.statutCommande = statutCommande;
    }
  }
  