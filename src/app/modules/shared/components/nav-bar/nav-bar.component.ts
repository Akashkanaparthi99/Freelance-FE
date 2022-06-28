import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from 'src/app/models/category';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';
import { SharedService } from '../../services/shared.service';

@Component({
 
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
