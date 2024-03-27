import { InscriptionService } from './../services/inscription.service';
import { Component, OnInit } from '@angular/core';
import { SessionFormationService } from '../services/sessionformation.service';
import { SessionFormation } from '../model/sessionformation.model';
import { Inscription } from '../model/inscription.model';
import { Utilisateur } from '../model/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-sessionformations',
  templateUrl: './sessionformations.component.html',
  styleUrl: './sessionformations.component.css'
})
export class SessionformationsComponent implements OnInit {
  inscription = new Inscription() ;


  sessionformations? : SessionFormation[];

  constructor(private sessionformationService : SessionFormationService , private inscriptionService :InscriptionService , private userService: UtilisateurService) {


    }

    ngOnInit(): void {
      this.chargerSessionFormations();


      }
   chargerSessionFormations(){

      this.sessionformationService.listeSessionFormation().subscribe(prods => {
      console.log(prods);
      this.sessionformations = prods;

          });
      }
      inscriptionSessionFormation( sessionformation : SessionFormation) {
        this.inscription.sessionFormation = sessionformation ;

               this.userService.consulterUtilisateur(3).subscribe(user => {

          this.inscription.user = user;
        } ) ;

        console.log(this.inscription);

        this.sessionformationService.ajouterInscription(this.inscription ) ;


      }


      supprimerSessionFormation(p: SessionFormation)

      {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
      this.sessionformationService.supprimerSessionFormation(p.id).subscribe(() => {

      console.log("sessionformation supprimé");

      this.chargerSessionFormations();
      });
      }
    }
