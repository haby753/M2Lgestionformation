import { Utilisateur } from './../model/utilisateur.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


 apiURL: string = 'http://localhost:8080/m2lFormation/api/utilisateur'

  utilisateurs! : Utilisateur[];
  utilisateur! : Utilisateur;

  consulterUtilisateur(id: number): Observable<Utilisateur> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Utilisateur>(url);
    }



  constructor(private http : HttpClient) {  }

  listeUtilisateur(): Observable<Utilisateur[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<Utilisateur[]>(url);

  }
  ajouterUtilisateur( prod: Utilisateur):Observable<Utilisateur>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Utilisateur>(url, prod, httpOptions);
    }

    supprimerUtilisateur( id: number){
      //supprimer le produit prod du tableau produits
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);

      }


      UpdateUtilisateur(p:Utilisateur)
  {
    const url = `${this.apiURL}/update`;
    return this.http.put<Utilisateur>(url, p, httpOptions);

      }

}
