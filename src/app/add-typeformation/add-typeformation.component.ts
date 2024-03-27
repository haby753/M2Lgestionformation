import { TypeFormation } from './../model/typeformation.model';
import { Component } from '@angular/core';
import { TypeFormationService } from '../services/typeformation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-typeformation',
  templateUrl: './add-typeformation.component.html',
  styleUrl: './add-typeformation.component.css'
})
export class AddTypeformationComponent {

  newTypeFormation = new TypeFormation();


  constructor(private typeformationService : TypeFormationService, private router : Router) {}

  ngOnInit(): void {
    this.chargerTypeFormations();
    }

    chargerTypeFormations(){

      this.typeformationService.listeTypeFormation().subscribe(prods => {
      console.log(prods);


          });
      }




    addTypeFormation(){

      this.typeformationService.ajouterTypeFormation(this.newTypeFormation)
      .subscribe(prod => {
      console.log(prod);
            this.router.navigate(['typeformations']);
            });

            }





          }
