import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeyratioComponent } from './keyratio/keyratio.component';
import { OverviewComponent } from './overview/overview.component';
import { PeersComponent } from './peers/peers.component';


const routes: Routes = [
  {path:'',redirectTo:'/overview',pathMatch:'full'},
  {path:'keyratios',component:KeyratioComponent},
  {path:'overview',component:OverviewComponent},
  {path:'peers',component:PeersComponent}
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
