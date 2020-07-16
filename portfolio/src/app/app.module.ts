import { ContactComponent } from './views/contact/contact.component';
import { WorkComponent } from './views/work/work.component';
import { AboutComponent } from './views/about/about.component';
import { HeaderComponent } from './views/header/header.component';
import { SkillsComponent } from './views/skills/skills.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
