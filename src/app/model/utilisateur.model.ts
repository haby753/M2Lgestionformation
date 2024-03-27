import { Role } from "./role.model";

export class Utilisateur {
    id_utilisateur!: number
    nom?: string;
    prenom?: string;
    email?: string;
    motdepasse?: string;
    role?:  Role;


}
