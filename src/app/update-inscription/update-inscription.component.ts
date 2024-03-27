import { Inscription } from './../model/inscription.model';
import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-inscription',
  templateUrl: './update-inscription.component.html',
  styleUrl: './update-inscription.component.css'
})

export class UpdateInscriptionComponent implements OnInit {


  currentInscription = new Inscription();

  constructor(private activatedRoute: ActivatedRoute,
    private inscriptionService: InscriptionService, private router : Router) { }


  ngOnInit() {

  // console.log(this.route.snapshot.params.id);
  this.currentInscription, this.inscriptionService.consulterInscription(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentInscription);
  }

  UpdateInscription()
  { //console.log(this.currentInscription);
    this.inscriptionService.UpdateInscription (this.currentInscription);
    this.router.navigate(['inscriptions']);
  }

}
