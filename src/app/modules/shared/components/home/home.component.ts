import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  categories!: Category[];
  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this._sharedService.getCategories().subscribe(
      {
        next: (data) => this.categories = data,
      }
    );
  }

}
