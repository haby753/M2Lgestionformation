import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeFormation } from '../model/typeformation.model';

const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class TypeFormationService {


  apiURL: string = 'http://localhost:8080/m2lFormation/api/typeformation'

  typeformations! : TypeFormation[];
  typeformation! : TypeFormation;


  consulterTypeFormation(id: number): Observable<TypeFormation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<TypeFormation>(url);
    }


  constructor(private http : HttpClient) {  }

  listeTypeFormation(): Observable<TypeFormation[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<TypeFormation[]>(url);

  }
  ajouterTypeFormation( prod: TypeFormation):Observable<TypeFormation>{
    const url = `${this.apiURL}/save`;
    return this.http.post<TypeFormation>(url, prod, httpOptions);
    }

    supprimerTypeFormation( id: number){
    const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);//primer le produit prod du tableau produits


      }


      UpdateTypeFormation(p:TypeFormation)
      {
        const url = `${this.apiURL}/update`;
        return this.http.put<TypeFormation>(url, p, httpOptions);
          }

}

