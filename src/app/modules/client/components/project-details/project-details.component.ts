import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
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
    this._activatedRoute.paramMap.subscribe(map => {
      let id = map.get('id');
      if (id) {
        this.projectId = parseInt(id);
      }
    })
    this._clientService.getProjectById(this.projectId).subscribe({
      next: (data) => this.project = data,
    })
  }

}
