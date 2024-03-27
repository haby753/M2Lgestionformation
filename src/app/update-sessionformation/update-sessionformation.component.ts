import { Component, OnInit } from '@angular/core';
import { SessionFormation } from '../model/sessionformation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionFormationService } from '../services/sessionformation.service';

@Component({
  selector: 'app-update-sessionformation',
  templateUrl: './update-sessionformation.component.html',
  styleUrl: './update-sessionformation.component.css'
})

export class UpdateSessionFormationComponent implements OnInit {


  currentSessionFormation = new SessionFormation();

  constructor(private activatedRoute: ActivatedRoute,
    private SessionformationService: SessionFormationService, private router : Router) { }

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
   this.SessionformationService.consulterSessionFormation(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentSessionFormation);
  }
 UpdateSessionFormation()

{ //console.log(this.currentsessionFormation);
  this.SessionformationService.UpdateSessionFormation (this.currentSessionFormation);
  this.router.navigate(['sessionformations']);

}
}
