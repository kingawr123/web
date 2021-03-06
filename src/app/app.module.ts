import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,
MatSliderModule, MatMenuModule, MatProgressSpinner, MatCardModule, MatGridListModule, MatTabsModule, MatSlideToggleModule} from '@angular/material';
import { CubeComponentComponent } from './cube-component/cube-component.component';
import { CuboidComponentComponent } from './cuboid-component/cuboid-component.component';
import { StartPagedComponentComponent } from './start-paged-component/start-paged-component.component';
import { PyramidComponentComponent } from './pyramid-component/pyramid-component.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DodecahedronComponentComponent } from './dodecahedron-component/dodecahedron-component.component';
import { OctahedronComponentComponent } from './octahedron-component/octahedron-component.component';
import { TheoryComponentComponent } from './theory-component/theory-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CubeComponentComponent,
    CuboidComponentComponent,
    StartPagedComponentComponent,
    PyramidComponentComponent,
    DodecahedronComponentComponent,
    OctahedronComponentComponent,
    TheoryComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatSliderModule, MatMenuModule,
    MatCardModule, MatGridListModule, MatTabsModule, MatSlideToggleModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
