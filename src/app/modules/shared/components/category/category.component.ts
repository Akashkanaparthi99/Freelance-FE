import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

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
