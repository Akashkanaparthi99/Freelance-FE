import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Freelance } from 'src/app/models/freelance';
import { FreelanceService } from '../../services/freelance.service';

@Component({
  selector: 'app-freelance-list',
  templateUrl: './freelance-list.component.html',
  styleUrls: ['./freelance-list.component.css']
})
export class FreelanceListComponent implements OnInit , OnChanges {

  type = '';
  value :string[] = [];
  choices: string[] = [];
  freelancers: Freelance[] = [];
  constructor(private _router: Router, private freelanceService: FreelanceService) { }
  

/**
 * 
 * @param changes 
 */
  ngOnChanges(changes: SimpleChanges): void {
    
  }
/**
 * 
 */
  ngOnInit(): void {
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

  showFiller = (item: string) => { 
    this.type = item;
    this.freelanceService.getDistinctValues(item).subscribe({
      next: (data) => { this.value = data }
    })

    // if (this.type == 'category') {
    //   this.freelanceService.getCategories().subscribe({
    //     next: (data) => { 
    //       this.value = data;
    //     }
    //   });
    // }
    // if (this.type == 'skills') {
    //   this.freelanceService.getAllSkills().subscribe({
    //     next: (data) => { 
    //       this.value = data;
    //     }
    //   });
    // }
    // if (this.type == 'rating') {
    //   this.freelanceService.getRating().subscribe({
    //     next: (data) => { 
    //       this.value = data;
    //     }
    //   });
    // }
  }

}
