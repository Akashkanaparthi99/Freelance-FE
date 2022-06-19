import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';

@Component({
 
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  categories = Object.values(Category);

  constructor() { }

  ngOnInit(): void {
  }

}
