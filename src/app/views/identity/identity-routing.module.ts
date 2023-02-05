import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsActivate } from '../../core/isActivate.guard';
import { IdentityComponent } from './identity.component';
import { SigninComponent } from './views/signin/signin.component';


export const IDENTITY_ROUTES: Routes = [
{
path: '',
component: IdentityComponent,
canActivate: [IsActivate],
children: [
{
path: '',
pathMatch: 'full',
redirectTo: 'signin',
},
{
path: 'signin',
component: SigninComponent,
},
],
},
];


@NgModule({
imports: [RouterModule.forChild(IDENTITY_ROUTES)],
exports: [RouterModule],
})
export class IdentityRoutingModule {}
