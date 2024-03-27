import { Component, OnInit } from '@angular/core';
import { Salle } from '../model/salle.model';
import { SalleService } from '../services/salle.service';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrl: './salles.component.css'
})
export class SallesComponent implements OnInit {

  salles? : Salle[];



  constructor(private salleService : SalleService  ) {


    }

    ngOnInit(): void {
      this.chargerSalles();


      }
   chargerSalles(){

      this.salleService.listeSalle().subscribe(prods => {
      console.log(prods);
      this.salles = prods;

          });
      }

      supprimerSalle(p: Salle)

      {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
      this.salleService.supprimerSalle(p.id_salle).subscribe(() => {

      console.log("salle supprimé");

      this.chargerSalles();
      });
      }
    }




