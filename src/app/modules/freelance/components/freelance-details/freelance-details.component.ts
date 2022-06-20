import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _activatedRoute: ActivatedRoute,private _freelanceService: FreelanceService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(map => {
      let id = map.get("id");
      if (id)
        this.freelanceId = parseInt(id);
      
    });

    this._freelanceService.getById(this.freelanceId).subscribe({
      next: (data) => { this.freelance = data; }
    })
  }



}
