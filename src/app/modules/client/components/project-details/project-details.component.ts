import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Project } from 'src/app/models/project';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project!: Project;
  projectId!: number;
  constructor(private _activatedRoute: ActivatedRoute,private _clientService: ClientService ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.
      pipe(
        switchMap((map) => {
          let id = map.get('id');
          if (id) {
            this.projectId = parseInt(id);
          }
          return this._clientService.getProjectById(this.projectId);
        })
      )
      .subscribe((data) => this.project = data);
  }

}
