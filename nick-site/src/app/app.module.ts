import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';
import { ProjectsComponent } from './projects/projects.component';
import { NowComponent } from './now/now.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  //{ path: 'games', component: GamesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'now', component: NowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GamesComponent,
    ProjectsComponent,
    NowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }