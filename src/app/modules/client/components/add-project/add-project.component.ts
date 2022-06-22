import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Project } from 'src/app/models/project';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  categories: Category[] = [];
  constructor(private _clientService: ClientService) { }

  ngOnInit(): void {
    this._clientService.getCategories().subscribe({
        next: (data) => this.categories= data,
      })
  }

  addProject = (projectForm: NgForm) => {
    let project: Project = projectForm.value;
    this._clientService.addProject(project).subscribe({
      next: (data) => console.log(data)
    })
  }
}
