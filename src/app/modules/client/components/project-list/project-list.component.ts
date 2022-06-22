import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  category: string = '';
  projects!:Project[];
  constructor(private _clientService: ClientService,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(map => {
      let category = map.get('name');
      if (category)
        this.category = category;
    });
    this._clientService.getByCategory(this.category).subscribe({
        next: (data) => this.projects = data,
      })
  }

}
