import { Role } from './../model/role.model';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrl: './update-role.component.css'
})

export class UpdateRoleComponent implements OnInit {


  currentRole = new Role();

  constructor(private activatedRoute: ActivatedRoute,
    private roleService: RoleService, private router : Router) { }


  ngOnInit() {

  // console.log(this.route.snapshot.params.id);
  this.currentRole, this.roleService.consulterRole(this.activatedRoute.snapshot. params['id']);
  console.log(this.currentRole);
  }

  UpdateRole()
  { //console.log(this.currentFormation);
    this.roleService.UpdateRole (this.currentRole);
    this.router.navigate(['roles']);
  }

}
