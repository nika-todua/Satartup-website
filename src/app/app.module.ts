import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HerosecComponent } from './herosec/herosec.component';
import { PartnersecComponent } from './partnersec/partnersec.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    HerosecComponent,
    PartnersecComponent,
    AboutComponent,
    TeamComponent,
    PortfoliopageComponent,
    ServicespageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
