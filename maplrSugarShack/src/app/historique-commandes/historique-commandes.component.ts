import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import {Observable} from 'rxjs'
import { Commande } from '../model/commande.model';
@Component({
  selector: 'app-historique-commandes',
  templateUrl: './historique-commandes.component.html',
  styleUrls: ['./historique-commandes.component.css']
})
export class HistoriqueCommandesComponent implements OnInit {

  listeCommandeObs : Observable<Commande[]> = new Observable()
  constructor(private commandeService : CommandeService) { }

  ngOnInit(): void {
    this.listeCommandeObs = this.commandeService.getAllCommandes()
  }

}
