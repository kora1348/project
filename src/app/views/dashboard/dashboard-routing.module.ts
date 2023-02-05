import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateTeam } from 'src/app/core/canActivateTeam.guard';
import { DashboardComponent } from './dashboard.component';

const DASHBOARD_ROUTES: Routes = [
{
path: 'dashboard',
component: DashboardComponent,
canActivate: [CanActivateTeam],

children: [
{
path: 'administration',
loadChildren: () =>
import('./views/administration/administration.module').then(
(m) => m.AdministrationModule
),
},

],
},
];

@NgModule({
imports: [RouterModule.forChild(DASHBOARD_ROUTES)],
exports: [RouterModule],
})
export class DashboardRoutingModule {}