import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,
MatSliderModule, MatMenuModule, MatProgressSpinner, MatCardModule, MatGridListModule, MatTabsModule} from '@angular/material';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';
import { StartPagedComponentComponent } from './start-paged-component/start-paged-component.component';
import { PyramidComponentComponent } from './pyramid-component/pyramid-component.component';
import { AboutPageComponentComponent } from './about-page-component/about-page-component.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DodecahedronComponentComponent } from './dodecahedron-component/dodecahedron-component.component';
import { OctahedronComponentComponent } from './octahedron-component/octahedron-component.component';
import { TeoryComponentComponent } from './teory-component/teory-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CubeComponentComponent,
    CuboidComponentComponent,
    StartPagedComponentComponent,
    PyramidComponentComponent,
    AboutPageComponentComponent,
    DodecahedronComponentComponent,
    OctahedronComponentComponent,
    TeoryComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSliderModule, MatMenuModule,
    MatCardModule, MatGridListModule, MatTabsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
