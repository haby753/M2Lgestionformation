import { Inscription } from './../model/inscription.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  apiURL: string = 'http://localhost:8080/m2lFormation/api/inscription'

  inscriptions! : Inscription[];
    inscription! : Inscription;

    consulterInscription(id: number): Observable<Inscription> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Inscription>(url);
      }

  constructor(private http : HttpClient) {  }

  listeInscription(): Observable<Inscription[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<Inscription[]>(url);

  }


  ajouterInscription( prod: Inscription):Observable<Inscription>{
    console.log(prod);
    const url = `${this.apiURL}/save`;
    console.log(url);
    return this.http.post<Inscription>(url, prod, httpOptions);
    }

    supprimerInscription( id: number){
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);


      }



      UpdateInscription(p:Inscription)
  {
    const url = `${this.apiURL}/update`;
    return this.http.put<Inscription>(url, p, httpOptions);

      }

}
