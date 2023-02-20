import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeHeroSectionComponent } from './components/home-hero-section/home-hero-section.component';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { TeamMembersComponent } from 'libs/pages/elewa/about-us/src/lib/team-members/team-members.component';
@NgModule({
  imports: [CommonModule],
  declarations: [HomePageComponent, HomeHeroSectionComponent, TeamMembersComponent],
  exports: [HomePageComponent, HomeHeroSectionComponent],
})
export class HomePageModule {}
