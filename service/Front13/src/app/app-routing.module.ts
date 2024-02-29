import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { ServiceComponent } from './service/service.component';
import { IssueComponent } from './issue/issue.component';

const routes: Routes = [


  { path: 'date', component: DateComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'issue', component: IssueComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
