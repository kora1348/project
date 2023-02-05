import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SessionService } from "src/app/servcices/sessions.service";
import { IdentityRoutingModule } from "./identity-routing.module";
import { IdentityComponent } from "./identity.component";
import { SigninComponent } from "./views/signin/signin.component";


@NgModule({
declarations: [
IdentityComponent,
SigninComponent,

],
imports: [
CommonModule,
RouterModule,
FormsModule,
IdentityRoutingModule

],
providers: [
SessionService
]
})
export class IdentityModule { }

