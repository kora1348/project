import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsModule } from "@ngxs/store";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CanActivateTeam } from "./core/canActivateTeam.guard";
import { AppHttpInterceptor } from "./core/interceptor/app-http.interceptor";
import { IsActivate } from "./core/isActivate.guard";
import { SessionState } from "./store/session/session.state";
import { IdentityModule } from "./views/identity/identity.module";




@NgModule({
declarations: [
AppComponent,
],
imports: [
BrowserModule,
AppRoutingModule,
IdentityModule,
HttpClientModule,
FormsModule,
NgxsModule.forRoot([SessionState], {
developmentMode: true
}),
NgxsStoragePluginModule.forRoot({
key: 'session'
}),

],
providers: [
CanActivateTeam,
IsActivate,
{
provide: HTTP_INTERCEPTORS,
useClass: AppHttpInterceptor,
multi: true

}
],
bootstrap: [AppComponent]
})
export class AppModule { }