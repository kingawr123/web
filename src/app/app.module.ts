import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,
MatSliderModule, MatMenuModule } from '@angular/material';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';
import { StartPagedComponentComponent } from './start-paged-component/start-paged-component.component';
import { SphereComponentComponent } from './sphere-component/sphere-component.component';
import { PyramidComponentComponent } from './pyramid-component/pyramid-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CubeComponentComponent,
    CuboidComponentComponent,
    StartPagedComponentComponent,
    SphereComponentComponent,
    PyramidComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSliderModule, MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
