import { RoleService } from './../services/role.service';
import { Role } from './../model/role.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent implements OnInit {

  newRole = new Role();

  constructor(private roleService : RoleService, private router : Router) {}

  ngOnInit(): void {
    this.chargerRoles();
    }

    chargerRoles(){

      this.roleService.listeRole().subscribe(prods => {
      console.log(prods);


          });
      }

  addRole(){

this.roleService.ajouterRole(this.newRole)
.subscribe(prod => {
console.log(prod);
      this.router.navigate(['roles']);
      });
      }
}
