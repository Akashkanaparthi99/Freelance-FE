import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Freelance } from 'src/app/models/freelance';
import { FreelanceService } from '../../services/freelance.service';

@Component({
  selector: 'app-freelance-list',
  templateUrl: './freelance-list.component.html',
  styleUrls: ['./freelance-list.component.css']
})
export class FreelanceListComponent implements OnInit {

  freelancers: Freelance[] = [];
  constructor(private _router:Router,private freelanceService: FreelanceService) { }

  ngOnInit(): void {
    this.freelanceService.getFreelanceList().subscribe({
      next: (data) => {
        this.freelancers = data;
      }
    });
  }

  onClick = (freelancer: Freelance) => { 
      this._router.navigate(['/freelance-details', freelancer.freelancerId]);
  }

}
