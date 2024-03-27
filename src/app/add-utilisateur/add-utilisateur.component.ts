import { UtilisateurService } from './../services/utilisateur.service';
import {  Utilisateur } from './../model/utilisateur.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrl: './add-utilisateur.component.css'
})
export class AddUtilisateurComponent implements OnInit {

  newUtilisateur = new Utilisateur();

  constructor(private utilisateurService : UtilisateurService, private router : Router) {}

  ngOnInit(): void {
    this.chargerUtilisateurs();
    }

    chargerUtilisateurs(){

      this.utilisateurService.listeUtilisateur().subscribe(prods => {
      console.log(prods);


          });
      }

  AddUtilisateur(){

this.utilisateurService.ajouterUtilisateur(this.newUtilisateur)
.subscribe(prod => {
console.log(prod);
      this.router.navigate(['Utilisateurs']);
      });
      }
}
