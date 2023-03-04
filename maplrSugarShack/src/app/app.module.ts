import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitService } from './services/produit.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PanierComponent } from './panier/panier.component';
import { HistoriqueCommandesComponent } from './historique-commandes/historique-commandes.component';
import { LigneCommandeService } from './services/ligneCommande.service';
import { TypeSiropService } from './services/type-sirop.service';
import { CommandeService } from './services/commande.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PanierComponent,
    HistoriqueCommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProduitService,LigneCommandeService,TypeSiropService,CommandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
