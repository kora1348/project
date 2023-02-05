import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration.component';
import { CorporateActionComponent } from './views/corporate-action/corporate-action.component';



export const ADMINISTRATION_ROUTES: Routes = [

{
path: '',
component: AdministrationComponent,

children: [
{
path: '',
pathMatch: 'full',
redirectTo: '/corporate-action',
},


{
path: 'corporate-action',
component: CorporateActionComponent,
},

],
},
];

@NgModule({
imports: [RouterModule.forChild(ADMINISTRATION_ROUTES)],
exports: [RouterModule],
})
export class AdministrationRoutingModule {}