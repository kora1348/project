import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { CorporateActionComponent } from './views/corporate-action/corporate-action.component';

@NgModule({
imports: [CommonModule, AdministrationRoutingModule],
declarations: [AdministrationComponent, CorporateActionComponent],
})
export class AdministrationModule {}