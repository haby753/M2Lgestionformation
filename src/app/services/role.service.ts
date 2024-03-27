import { Role } from './../model/role.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  apiURL: string = 'http://localhost:8080/m2lFormation/api/Role'

  roles! : Role[];
    role! : Role;

    consulterRole(id: number): Observable<Role> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Role>(url);
      }

  constructor(private http : HttpClient) {  }

  listeRole(): Observable<Role[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<Role[]>(url);

  }


  ajouterRole( prod: Role):Observable<Role>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Role>(url, prod, httpOptions);
    }

    supprimerRole( id: number){
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);


      }



      UpdateRole(p:Role)
  {
    const url = `${this.apiURL}/update`;
    return this.http.put<Role>(url, p, httpOptions);

      }

}
