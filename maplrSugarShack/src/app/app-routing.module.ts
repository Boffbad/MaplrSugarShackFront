import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { HistoriqueCommandesComponent } from './historique-commandes/historique-commandes.component';

const base = ""
const routes: Routes = [
  { path: base + '', component: HomeComponent },
  { path: base + 'panier', component: PanierComponent },
  { path: base + 'historiqueCommandes', component: HistoriqueCommandesComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
