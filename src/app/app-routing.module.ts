import { Utilisateur } from './model/utilisateur.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallesComponent } from './salles/salles.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
import { FormationsComponent } from './formations/formations.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { SessionformationsComponent } from './sessionformations/sessionformations.component';
import { AddSessionFormationComponent } from './add-sessionformation/add-sessionformation.component';
import { TypeformationsComponent } from './typeformations/typeformations.component';
import { AddTypeformationComponent } from './add-typeformation/add-typeformation.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { UpdateSessionFormationComponent } from './update-sessionformation/update-sessionformation.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';





const routes: Routes = [
  {path: "salles", component : SallesComponent},
  { path: 'add-salle', component: AddSalleComponent },
  { path: "", redirectTo: "", pathMatch: "full" },
  {path: "formations", component : FormationsComponent},
  { path: 'add-formation', component: AddFormationComponent },

  {path: "sessionformations", component : SessionformationsComponent},
  { path: 'add-sessionformation', component: AddSessionFormationComponent },

  {path: "typeformations", component : TypeformationsComponent},
  { path: 'add-typeformation', component: AddTypeformationComponent },

  {path: "utilisateurs", component : UtilisateurComponent},
  { path: 'add-utilisateur', component: AddUtilisateurComponent },

  {path: "updateFormation/:id", component: UpdateFormationComponent},
  {path: "updateSalle/:id", component: UpdateSalleComponent},
  {path: "updateSessionformation/:id", component: UpdateSessionFormationComponent},
  {path: "updateTypeFormation/:id", component: UpdateFormationComponent},
  {path: "updateUtilisateur/:id", component: UpdateUtilisateurComponent},






];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
