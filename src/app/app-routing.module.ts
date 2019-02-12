import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';
import { StartPagedComponentComponent } from './start-paged-component/start-paged-component.component';
import { PyramidComponentComponent } from './pyramid-component/pyramid-component.component';
import { DodecahedronComponentComponent } from './dodecahedron-component/dodecahedron-component.component';
import { OctahedronComponentComponent } from './octahedron-component/octahedron-component.component';
import { TheoryComponentComponent } from './theory-component/theory-component.component';

const routes: Routes = [
  {path: 'cube', component: CubeComponentComponent},
  {path: 'cuboid', component: CuboidComponentComponent},
  {path: 'startPage', component: StartPagedComponentComponent},
  {path: 'pyramid', component: PyramidComponentComponent},
  {path: 'dodecahedron', component: DodecahedronComponentComponent},
  {path: 'octaedr', component: OctahedronComponentComponent},
  {path: 'theory', component: TheoryComponentComponent},
  {path:'', redirectTo: '/startPage', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
