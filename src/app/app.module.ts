import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';




const routes: Routes = [
 // { path: '', redirectTo: '/in-page', pathMatch: 'full' },

  { path: 'in-page', component: SidenavComponent },
  { path: 'first-page', component: ProfileComponent },
  { path: 'second-page', component: RecommendationComponent },
  { path: 'third-page', component: AboutUsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecommendationComponent,
    ProfileComponent,
    AboutUsComponent,
    SidenavComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
