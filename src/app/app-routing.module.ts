import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{
path: '',
loadChildren: () => import('./views/identity/identity.module').then((m) => m.IdentityModule),
},

{
path: '',
loadChildren: () => import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule),
},



];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }