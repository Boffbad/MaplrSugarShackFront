import { TypeSirop } from './typeSirop.model';

export class Produit {
    id: number;
    nom : string;
    type : TypeSirop;
    description : string;
    contenance : string;
    prix : number;
    imageUrl : string;

    
    constructor(id: number,nom: string, typeSirop :TypeSirop, description : string, contenance : string, prix: number, imageUrl : string){
      this.id = 0;
      this.nom = nom;
      this.type = typeSirop;
      this.description = description;
      this.contenance = contenance;
      this.prix = prix;
      this.imageUrl = imageUrl;
    }
  }
  