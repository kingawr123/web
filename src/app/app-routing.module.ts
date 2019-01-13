import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';

const routes: Routes = [
  {path: 'cube', component: CubeComponentComponent},
  {path: 'cuboid', component: CuboidComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
