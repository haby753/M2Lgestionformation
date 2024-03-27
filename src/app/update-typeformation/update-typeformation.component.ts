import { Component, OnInit } from '@angular/core';
import { TypeFormation } from '../model/typeformation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeFormationService } from '../services/typeformation.service';

@Component({
  selector: 'app-update-typeformation',
  templateUrl: './update-typeformation.component.html',
  styleUrl: './update-typeformation.component.css'
})

export class UpdateTypeFormationComponent implements OnInit {


  currentTypeFormation = new TypeFormation();


  constructor(private activatedRoute: ActivatedRoute,
  private typeformationService: TypeFormationService, private router : Router) { }

  ngOnInit() {
  // console.log(this.route.snapshot.params.id);
  this.typeformationService.consulterTypeFormation(this.activatedRoute.snapshot. params['id']).
  subscribe( prod =>{ this.currentTypeFormation = prod; } ) ;
  }

  UpdateTypeFormation()
  { //console.log(this.currentFormation);
    this.typeformationService.UpdateTypeFormation (this.currentTypeFormation);
    this.router.navigate(['typeformations']);
}
}
