import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { PrincipalComponent } from './principal/principal.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'portafolio', component:PrincipalComponent}, 
  {path:'', redirectTo: 'portafolio', pathMatch:'full'},
  {path:'skills', component:SkillsComponent},
  {path: 'experience', component:ExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
