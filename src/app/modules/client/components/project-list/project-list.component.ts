import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects!:Project[];
  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {
    this._clientService.getProjects().subscribe({
        next: (data) => this.projects = data,
      })
  }

}
