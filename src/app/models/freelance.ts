import { ContactDetails } from "./contact-details";

export interface Freelance {
    freelancerId:number;
    freelancerName:string;
    noOfProjects:number;
    rating:number;
    contactDetails:ContactDetails;
    category:string[];
    skills:string[];
}
