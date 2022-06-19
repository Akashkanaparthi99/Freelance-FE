import { ContactDetails } from "./contact-details";

export interface Freelance {
    freelanceId:number;
    freelanceName:string;
    noOfProjects:number;
    rating:number;
    contactDetails:ContactDetails;
    category:string[];
    skills:string[];
}
