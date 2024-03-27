import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/formation.service';
import { Formation } from '../model/formation.model';
import { ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrl: './update-formation.component.css'

})


export class UpdateFormationComponent implements OnInit {


currentFormation = new Formation();

constructor(private activatedRoute: ActivatedRoute,
  private formationService: FormationService, private router : Router) { }



ngOnInit() {


// console.log(this.route.snapshot.params.id);
this.currentFormation, this.formationService.consulterFormation(this.activatedRoute.snapshot. params['id']);
console.log(this.currentFormation);
}



UpdateFormation()
{ //console.log(this.currentFormation);
  
  this.formationService.UpdateFormation (this.currentFormation).subscribe(prod => {
  this.router.navigate(['formations']);
}




  );
}
}


