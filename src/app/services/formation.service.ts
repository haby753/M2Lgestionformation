import { UpdateFormationComponent } from './../update-formation/update-formation.component';
import { Formation } from './../model/formation.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  apiURL: string = 'http://localhost:8080/m2lFormation/api/formation'

     formations! : Formation[];
    formation! : Formation;
  updateFormation: any;

  consulterFormation(id: number): Observable<Formation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Formation>(url);
    }

  constructor(private http : HttpClient) {  }

  listeFormation(): Observable<Formation[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<Formation[]>(url);

  }

  ajouterFormation( prod: Formation):Observable<Formation>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Formation>(url, prod, httpOptions);
    }


    supprimerFormation( id: number){
      //supprimer le produit prod du tableau produits
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);

      }




   UpdateFormation(id:Formation)
  {
    const url = `${this.apiURL}/update`;
    return this.http.put<Formation>(url, id, httpOptions);

      }



}
