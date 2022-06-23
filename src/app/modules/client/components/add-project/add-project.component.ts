import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
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
  projectForm = new FormGroup({
    projectName: new FormControl(),
    budget: new FormControl(),
    duration: new FormControl(),
    projectCategory: new FormControl(),
    details: new FormControl()
  });

  addProject = (projectForm: FormGroup) => {
    let project: Project = projectForm.value;
    this._clientService.addProject(project).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("Completed")
    })
    projectForm.reset();
  }
}
