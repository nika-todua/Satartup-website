import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PortfoliopageComponent } from './portfoliopage/portfoliopage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero', component: HomepageComponent },
  { path: 'portfolio', component: PortfoliopageComponent },
  { path: 'services', component: ServicespageComponent },
  { path: 'contact', component: ContactpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
