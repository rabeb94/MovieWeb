import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'first-page', component: ProfileComponent },
  { path: 'second-page', component: RecommendationComponent },
  { path: 'third-page', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RecommendationComponent,
    ProfileComponent,
    AboutUsComponent,
    AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
