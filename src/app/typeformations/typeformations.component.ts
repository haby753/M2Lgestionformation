import { Component } from '@angular/core';
import { TypeFormation } from '../model/typeformation.model';
import { TypeFormationService } from '../services/typeformation.service';

@Component({
  selector: 'app-typeformations',
  templateUrl: './typeformations.component.html',
  styleUrl: './typeformations.component.css'
})
export class TypeformationsComponent {

  typeformations? : TypeFormation[];

  constructor(private typeformationService : TypeFormationService) {

    }

    ngOnInit(): void {
      this.chargerTypeFormations();


      }
   chargerTypeFormations(){

      this.typeformationService.listeTypeFormation().subscribe(prods => {
      console.log(prods);
      this.typeformations = prods;

          });
      }

      supprimerTypeFormation(p: TypeFormation)

      {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
      this.typeformationService.supprimerTypeFormation(p.id_typeformation).subscribe(() => {

      console.log("typeformation supprimé");

      this.chargerTypeFormations();
      });
      }
    }







