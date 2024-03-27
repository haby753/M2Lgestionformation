
import { Inscription } from './../model/inscription.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-add-inscription',
  templateUrl: './add-inscription.component.html',
  styleUrl: './add-inscription.component.css'
})
export class AddInscriptionComponent implements OnInit {

  newInscription = new Inscription();

  constructor(private inscriptionService : InscriptionService, private router : Router) {}

  ngOnInit(): void {
    this.chargerInscriptions();
    }

    chargerInscriptions(){

      this.inscriptionService.listeInscription().subscribe(prods => {
      console.log(prods);


          });
      }

  AddInscription(){

this.inscriptionService.ajouterInscription(this.newInscription)
.subscribe(prod => {
console.log(prod);
      this.router.navigate(['inscriptions']);
      });
      }
}
