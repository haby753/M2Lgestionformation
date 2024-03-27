import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddSalleComponent } from './add-salle/add-salle.component';
import { SallesComponent } from './salles/salles.component';

import { FormationsComponent } from './formations/formations.component';
import { TypeformationsComponent } from './typeformations/typeformations.component';
import { SessionformationsComponent } from './sessionformations/sessionformations.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { UpdateSalleComponent } from './update-salle/update-salle.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { UpdateSessionFormationComponent } from './update-sessionformation/update-sessionformation.component';
import { UpdateTypeFormationComponent } from './update-typeformation/update-typeformation.component';
import { UpdateUtilisateurComponent } from './update-utilisateur/update-utilisateur.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AddSessionFormationComponent } from './add-sessionformation/add-sessionformation.component';
import { AddTypeformationComponent } from './add-typeformation/add-typeformation.component';
import { AddUtilisateurComponent } from './add-utilisateur/add-utilisateur.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InscriptionsComponent } from './inscriptions/inscriptions.component'
import { RolesComponent } from './role/roles.component';
import { AddInscriptionComponent } from './add-inscription/add-inscription.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateInscriptionComponent } from './update-inscription/update-inscription.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSalleComponent,
   SallesComponent,
  FormationsComponent,
  TypeformationsComponent,
   SessionformationsComponent,
                 UtilisateurComponent,
                  UpdateSalleComponent,
                  UpdateFormationComponent,
                  UpdateSessionFormationComponent,
                  UpdateUtilisateurComponent,
                  AddFormationComponent,
                  AddSessionFormationComponent,
                  AddTypeformationComponent,
                  AddUtilisateurComponent,
                  UpdateTypeFormationComponent,
                  InscriptionsComponent,
                  RolesComponent,
                  AddInscriptionComponent,
                  AddRoleComponent,
                  UpdateInscriptionComponent,
                  UpdateRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
