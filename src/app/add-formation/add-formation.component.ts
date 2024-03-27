import { Formation } from './../model/formation.model';
import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrl: './add-formation.component.css'
})

export class AddFormationComponent implements OnInit {


  newFormation = new Formation();


  constructor(private formationService : FormationService, private router : Router) {}

  ngOnInit(): void {
    this.chargerFormations();
    }

    chargerFormations(){

      this.formationService.listeFormation().subscribe(prods => {
      console.log(prods);


          });
      }



  addFormation(){

this.formationService.ajouterFormation(this.newFormation)
.subscribe(prod => {
console.log(prod);
      this.router.navigate(['formations']);
      });
      }
}

