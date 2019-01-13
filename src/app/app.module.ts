import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';
import { CubeComponentComponent } from './cube-component/cube-component.component';


@NgModule({
  declarations: [
    AppComponent,
    CubeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
