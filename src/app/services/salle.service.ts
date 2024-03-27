import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Salle } from '../model/salle.model';

const httpOptions ={ headers: new HttpHeaders( {'Content-Type': 'application/json'} )

};

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  apiURL: string = 'http://localhost:8080/m2lFormation/api/salle'

  salles! : Salle[];
    salle! : Salle;

    consulterSalle(id: number): Observable<Salle> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Salle>(url);
      }

  constructor(private http : HttpClient) {  }

  listeSalle(): Observable<Salle[]>{
    const url = `${this.apiURL}/all`;

    return this.http.get<Salle[]>(url);

  }


  ajouterSalle( prod: Salle):Observable<Salle>{
    const url = `${this.apiURL}/save`;
    return this.http.post<Salle>(url, prod, httpOptions);
    }

    supprimerSalle( id: number){
      const url = `${this.apiURL}/delete/${id}`;
      return this.http.delete(url, httpOptions);


      }



      UpdateSalle(p:Salle)
  {
    const url = `${this.apiURL}/update`;
    return this.http.put<Salle>(url, p, httpOptions);

      }

}

