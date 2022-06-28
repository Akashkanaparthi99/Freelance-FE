import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Freelance } from 'src/app/models/freelance';
import { FreelanceService } from '../../services/freelance.service';

@Component({
  selector: 'app-freelance-details',
  templateUrl: './freelance-details.component.html',
  styleUrls: ['./freelance-details.component.css']
})
export class FreelanceDetailsComponent implements OnInit {

  freelanceId: number = 0;
  freelance!: Freelance;
  categories: string[] = [];
  skills: string[]= [];
  
  constructor(private _activatedRoute: ActivatedRoute,private _freelanceService: FreelanceService) { }

  ngOnInit(): void {
    // this._activatedRoute.paramMap.pipe(
    //   switchMap((map) => {
    //     let id = map.get("id");
    //     if (id)
    //       this.freelanceId = parseInt(id);
    //         this._freelanceService.getById(this.freelanceId).subscribe({
    //           next: (data) => { this.freelance = data; }
    //         })
    //         this._freelanceService.getCategoriesById(this.freelanceId).subscribe({
    //           next: (data) => { this.categories = data; }
    //         })
    //         this._freelanceService.getSkillsById(this.freelanceId).subscribe({
    //           next: (data) => { this.skills = data; }
    //         })
    //   } 
    //   )
    // ).subscribe()


    this._activatedRoute.paramMap.subscribe(map => {
      let id = map.get("id");
      if (id)
        this.freelanceId = parseInt(id);
    });

    this._freelanceService.getById(this.freelanceId).subscribe({
      next: (data) => { this.freelance = data; }
    });
    this._freelanceService.getCategoriesById(this.freelanceId).subscribe({
      next: (data) => { this.categories = data; }
    });
    this._freelanceService.getSkillsById(this.freelanceId).subscribe({
      next: (data) => { this.skills = data; }
    });
  }



}
