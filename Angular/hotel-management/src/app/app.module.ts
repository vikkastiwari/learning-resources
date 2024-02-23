import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SformComponent } from './components/sform/sform.component';
import { SlistComponent } from './components/slist/slist.component';

@NgModule({
  declarations: [
    AppComponent,
    SformComponent,
    SlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
