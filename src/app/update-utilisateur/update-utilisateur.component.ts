import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from './../model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrl: './update-utilisateur.component.css'
})

export class UpdateUtilisateurComponent implements OnInit {

  currentUtilisateur = new Utilisateur();

  constructor(private activatedRoute: ActivatedRoute,
  private utilisateurService: UtilisateurService, private router : Router) { }

  ngOnInit() {

  // console.log(this.route.snapshot.params.id);
  this.utilisateurService.consulterUtilisateur(this.activatedRoute.snapshot. params['id']).
  subscribe( prod =>{ this.currentUtilisateur = prod; } ) ;
  }


  Updatetilisateur()
  { //console.log(this.currentFormation);
    this.utilisateurService.UpdateUtilisateur (this.currentUtilisateur);
    this.router.navigate(['utilisateurs']);

}
}
