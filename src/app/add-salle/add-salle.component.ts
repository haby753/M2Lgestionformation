import { SalleService } from './../services/salle.service';
import { Salle } from './../model/salle.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrl: './add-salle.component.css'
})
export class AddSalleComponent implements OnInit {

  newSalle = new Salle();

  constructor(private salleService : SalleService, private router : Router) {}

  ngOnInit(): void {
    this.chargerSalles();
    }

    chargerSalles(){

      this.salleService.listeSalle().subscribe(prods => {
      console.log(prods);


          });
      }

  addSalle(){

this.salleService.ajouterSalle(this.newSalle)
.subscribe(prod => {
console.log(prod);
      this.router.navigate(['salles']);
      });
      }
}


