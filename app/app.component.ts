import { Component }       from '@angular/core';
import { MovieService }     from './movie.service';
import { GridViewComponent } from './grid-view.component';
import { ListViewComponent } from './list-view.component';
import { MovieDetailComponent } from './movie-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/gridview',
    name: 'Grid',
    component: GridViewComponent,
    useAsDefault: true
  },
  {
    path: '/listview',
    name: 'List',
    component: ListViewComponent
  },
  {
    path: '/detail/:id',
    name: 'MovieDetail',
    component: MovieDetailComponent
  }
])

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Grid']">Grid View</a>
        <a [routerLink]="['List']">List View</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    MovieService
  ]
})
export class AppComponent {
  title = 'Movie Listings @ GV Cinema';
}