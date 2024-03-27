import { Component } from '@angular/core';
import { Utilisateur } from '../model/utilisateur.model';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {

  utilisateurs? : Utilisateur[];


  constructor
  (private utilisateurService : UtilisateurService) {
  

    }

    ngOnInit(): void {
      this.chargerUtilisateurs();


      }
   chargerUtilisateurs(){

      this.utilisateurService.listeUtilisateur().subscribe(prods => {
      console.log(prods);
      this.utilisateurs = prods;

          });
      }

      supprimerUtilisateur(p: Utilisateur)

      {
            let conf = confirm("Etes-vous sûr ?");
            if (conf)
                this.utilisateurService.supprimerUtilisateur(p.id_utilisateur).subscribe(() => {

                console.log("utilisateur supprimé");

                this.chargerUtilisateurs();
                });
                }
    }





