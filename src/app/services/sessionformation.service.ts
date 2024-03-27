

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionFormation } from '../model/sessionformation.model';
import { Inscription } from '../model/inscription.model';

const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class SessionFormationService {


  apiURL: string = 'http://localhost:8080/m2lFormation/api/sessionformation'

  apiURL1: string = 'http://localhost:8080/m2lFormation/api/inscription'
     sessionformations! : SessionFormation[];
    sessionformation! : SessionFormation;
     inscription! : Observable<Inscription>;

  consulterFormation(id: number): Observable<SessionFormation> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<SessionFormation>(url);
    }


    consulterSessionFormation(id: number): Observable<SessionFormation> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<SessionFormation>(url);
      }

  constructor(private http : HttpClient) {  }

  listeSessionFormation(): Observable<SessionFormation[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<SessionFormation[]>(url);

  }

  ajouterSessionFormation( prod: SessionFormation):Observable<SessionFormation>{
    const url = `${this.apiURL}/save`;
    return this.http.post<SessionFormation>(url, prod, httpOptions);
    }

    supprimerSessionFormation( id: number){
      //supprimer le produit prod du tableau produits
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);

      }

      ajouterInscription(prod: Inscription):Observable<Inscription>{

        const url = `${this.apiURL1}/save`;

     return   this.http.post<Inscription>(url, prod, httpOptions).pipe(
          catchError((error: any) => {
            // Gérer l'erreur ici, par exemple :
            console.error('Une erreur s\'est produite : ', error);
            // Renvoyer un Observable avec une erreur personnalisée ou rejetée
            return throwError('Une erreur est survenue lors de l\'ajout de l\'inscription.');
          })
        );

        }



      UpdateSessionFormation(p:SessionFormation)
  {
    const url = `${this.apiURL}/update`;
    return this.http.put<SessionFormation>(url, p, httpOptions);

      }


}
