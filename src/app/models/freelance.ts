import { Category } from "./category";
import { ContactDetails } from "./contact-details";

export interface Freelance {
    freelancerId:number;
    freelancerName:string;
    noOfProjects:number;
    rating:number;
    contactDetails:ContactDetails;
    category:Category[];
    skills:string[];
}
