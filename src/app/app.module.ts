import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
	AboutComponent,
	ContactComponent,
	HeaderComponent,
	HomeComponent,
	WorkComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
	AboutComponent,
	ContactComponent,
	HeaderComponent,
	HomeComponent,
	WorkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
