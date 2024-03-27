import { Component, OnInit } from '@angular/core';
import { SalleService } from '../services/salle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Salle } from '../model/salle.model';

@Component({
  selector: 'app-update-salle',
  templateUrl: './update-salle.component.html',
  styleUrl: './update-salle.component.css'
})

export class UpdateSalleComponent implements OnInit {


  currentSalle = new Salle();

  constructor(private activatedRoute: ActivatedRoute,
    private salleService: SalleService, private router : Router) { }


  ngOnInit() {

  // console.log(this.route.snapshot.params.id);
  this.currentSalle, this.salleService.consulterSalle(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentSalle);
  }

  UpdateSalle()
  { //console.log(this.currentFormation);
    this.salleService.UpdateSalle (this.currentSalle);
    this.router.navigate(['salles']);
  }

}
