import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent },
  { path: 'member-profile/:id', component: MemberProfileComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
