import { SessionFormation } from './../model/sessionformation.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionFormationService } from '../services/sessionformation.service';
import { FormationService } from '../services/formation.service';
import { Formation } from '../model/formation.model';
import { Salle } from '../model/salle.model';
import { SalleService } from '../services/salle.service';

@Component({
  selector: 'app-add-sessionformation',
  templateUrl: './add-sessionformation.component.html',
  styleUrl: './add-sessionformation.component.css'
})
export class AddSessionFormationComponent implements OnInit {

  newSessionFormation = new SessionFormation();
   formations!: Formation[];
    salles!: Salle[];

  constructor (private sessionformationService : SessionFormationService, private router : Router , private formationService: FormationService , private salleService: SalleService) {}

  ngOnInit(): void {
      this.chargerFormations();
      this.chargerSalles();

  }

  chargerFormations(){

      this.formationService.listeFormation().subscribe(prods => {
      console.log(prods);
      this.formations = prods;

          });
      }

      chargerSalles(){

        this.salleService.listeSalle().subscribe(prods => {
        console.log(prods);
        this.salles = prods;

            });
        }

  AddSessionFormationComponent(){
this.sessionformationService.ajouterSessionFormation(this.newSessionFormation)
.subscribe(prod => {
console.log(prod);
      this.router.navigate(['sessionformations']);
      });

      }
}


