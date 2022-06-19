import { Project } from "./project";

export interface Client {
    clientId:number;
    cientName:string;
    email:string;
    projects:Project[];
}
