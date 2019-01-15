import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';
import { StartPagedComponentComponent } from './start-paged-component/start-paged-component.component';
import { SphereComponentComponent } from './sphere-component/sphere-component.component';
import { PyramidComponentComponent } from './pyramid-component/pyramid-component.component';

const routes: Routes = [
  {path: 'cube', component: CubeComponentComponent},
  {path: 'cuboid', component: CuboidComponentComponent},
  {path: 'startPage', component: StartPagedComponentComponent},
  {path: 'sphere', component: SphereComponentComponent},
  {path: 'pyramid', component: PyramidComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
