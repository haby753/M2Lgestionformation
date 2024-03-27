import { Role } from './../model/role.model';
import { Component, OnInit } from '@angular/core';
import {RoleService } from '../services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  Roles? : Role[];


  constructor(private RoleService : RoleService) {
    }

    ngOnInit(): void {
      this.chargerRoles();
      }

   chargerRoles(){

      this.RoleService.listeRole().subscribe(prods => {
      console.log(prods);
      this.Roles = prods;

          });
      }

      supprimerRole(p: Role)

      {
          let conf = confirm("Etes-vous sûr ?");
          if (conf)
              this.RoleService.supprimerRole(p.id).subscribe(() => {

              console.log("role supprimé");

              this.chargerRoles();
              });
              }
    }
