import { Formation } from "./formation.model";
import { Salle } from "./salle.model";

export class SessionFormation {
  id!: number;
  datededebut!: Date;
datedefin!: Date;
 lieu?: string;
 formation!: Formation;
 salle!: Salle;




    }
