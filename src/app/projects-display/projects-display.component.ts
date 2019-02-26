import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-projects-display',
  templateUrl: './projects-display.component.html',
  styleUrls: ['./projects-display.component.css']
})
export class ProjectsDisplayComponent implements OnChanges {
  constructor() { }

  @Input() type: string;
  @Input() projects: Project[];

  ngOnChanges(changes: SimpleChanges) {
    if(changes['projects'] && this.projects !== undefined) {
      var tempProjects: Project[] = [];

      for(let project of this.projects) {
        //console.log(project.type + ", " + this.type);
        if(project.type === this.type) {
          tempProjects.push(project);
        }
      }

      this.projects = tempProjects;
    }
  }

  private _projects: Project[];
}