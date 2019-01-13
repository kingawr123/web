import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CubeComponentComponent } from './cube-component/cube-component.component';

const routes: Routes = [
  {path: 'cube', component: CubeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
