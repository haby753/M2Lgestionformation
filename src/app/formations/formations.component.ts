import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrl: './formations.component.css'
})
export class FormationsComponent implements OnInit {

  formations? : Formation[];


  constructor(private formationService : FormationService) {


    }

    ngOnInit(): void {
      this.chargerFormations();


      }
   chargerFormations(){

      this.formationService.listeFormation().subscribe(prods => {
      console.log(prods);
      this.formations = prods;

          });
      }

      supprimerFormation(p: Formation)

      {
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
              this.formationService.supprimerFormation(p.id).subscribe(() => {

              console.log("formation supprimé");

              this.chargerFormations();
              });
              }
    }
