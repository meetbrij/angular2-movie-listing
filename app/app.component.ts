import { Component, Input }       from '@angular/core';
import { MovieService }     from './movie.service';
import { GridViewComponent } from './grid-view.component';
import { MovieDetailComponent } from './movie-detail.component';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@RouteConfig([
  {
    path: '/:language',
    name: 'LanguageGrid',
    component: GridViewComponent,
    useAsDefault: true
  },
  {
    path: 'audience/:audience',
    name: 'AudienceGrid',
    component: GridViewComponent,
  },
  {
    path: 'rating/:rating',
    name: 'RatingGrid',
    component: GridViewComponent,
  },
  {
    path: '/detail/:id',
    name: 'MovieDetail',
    component: MovieDetailComponent
  }
])

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    MovieService
  ]
})
export class AppComponent {
  title = 'Movie Listings @ GV Cinema';

  constructor(
    private router: Router
  ) { }

  onLanguageChange(deviceValue:string) {
    console.log("lang: " + deviceValue);
    let link = ['LanguageGrid', { language: deviceValue }];
    this.router.navigate(link);
  }

  onAudienceChange(deviceValue:string) {
    console.log(deviceValue);
    let link = ['AudienceGrid', { audience: deviceValue }];
    this.router.navigate(link);
  }

  onRatingChange(deviceValue:string) {
    console.log(deviceValue);
    let link = ['RatingGrid', { rating: deviceValue }];
    this.router.navigate(link);
  }
}