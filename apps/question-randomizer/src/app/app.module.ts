import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedLayoutUiCrtComponent } from '@my-projects-nx/shared/layout/ui-crt';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedLayoutUiCrtComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
