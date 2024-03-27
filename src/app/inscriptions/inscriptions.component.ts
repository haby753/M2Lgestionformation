import { Inscription } from './../model/inscription.model';
import { Component, OnInit } from '@angular/core';
import {InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.css'
})
export class InscriptionsComponent implements OnInit {

  inscriptions? : Inscription[];


  constructor(private InscriptionService : InscriptionService) {


    }

    ngOnInit(): void {
      this.chargerInscriptions();


      }
   chargerInscriptions(){

      this.InscriptionService.listeInscription().subscribe(prods => {
      console.log(prods);
      this.inscriptions = prods;

          });
      }

      supprimerInscription(p: Inscription)

      {
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
              this.InscriptionService.supprimerInscription(p.id).subscribe(() => {

              console.log("inscription supprimé");

              this.chargerInscriptions();
              });
              }
    }
