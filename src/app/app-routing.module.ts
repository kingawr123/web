import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';
import { StartPagedComponentComponent } from './start-paged-component/start-paged-component.component';

const routes: Routes = [
  {path: 'cube', component: CubeComponentComponent},
  {path: 'cuboid', component: CuboidComponentComponent},
  {path: 'startPage', component: StartPagedComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
