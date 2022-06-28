import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';
import { Freelance } from 'src/app/models/freelance';
import { FreelanceService } from '../../services/freelance.service';

@Component({
  selector: 'app-freelance-list',
  templateUrl: './freelance-list.component.html',
  styleUrls: ['./freelance-list.component.css']
})
export class FreelanceListComponent implements OnInit {

  type = '';
  value :string[] = [];
  choices: string[] = [];
  freelancers: Freelance[] = [];
  constructor(private _router: Router, private freelanceService: FreelanceService) { }

  ngOnInit(): void {
    // const allFreelancers$ = this.freelanceService.getFreelanceList();
    // const allChoices$ = this.freelanceService.getFreelance();

    // combineLatest([allFreelancers$, allChoices$])
    //   .pipe(
    //     switchMap(([allFreelancers, allChoices]) => {
    //       for (const key of Object.keys(allChoices)) {
    //         if (key == 'category' || key == 'skills' || key == 'rating') {
    //           this.choices.push(key);
    //         }
    //       }
    //   })
    // )
    
    this.freelanceService.getFreelanceList().subscribe({
      next: (data) => {
        this.freelancers = data;
      }
    });

    this.freelanceService.getFreelance().subscribe({
      next: (data) => {
        for (const key of Object.keys(data)) {
          if (key == 'category' || key == 'skills' || key == 'rating') {
            this.choices.push(key);
          }
        }
      }
    });
    
  }
/**
 * 
 * @param freelancer 
 */
  onClick = (freelancer: Freelance) => { 
      this._router.navigate(['/freelance-details', freelancer.freelancerId]);
  }
/**
 * 
 * @param type 
 * @param value 
 */
  getFilter = (type: string, value: string) => {
    if (type == 'rating') {
      let rating = parseFloat(value);
      this.freelanceService.getByFilter(type, rating).subscribe({
        next: (data) => { 
          this.freelancers = [];
          this.freelancers = data;
        }
      })
    }
    this.freelanceService.getByFilter(type, value).subscribe({
      next: (data) => { 
        this.freelancers = [];
        
        this.freelancers = data;
      }
    })
  }
/**
 * 
 * @param item 
 */
  showFiller = (item: string) => { 
    this.type = item;
    this.freelanceService.getDistinctValues(item).subscribe({
      next: (data) => { this.value = data }
    })
  }

}
