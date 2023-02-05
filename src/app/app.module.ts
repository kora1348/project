import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { NgxsModule } from "@ngxs/store";
import { AppHttpInterceptor } from "src/core/app-http.interceptor";
import { CanActivateTeam } from "src/core/canActivateTeam.guard";
import { IsActivate } from "src/core/isActivate.guard";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SessionState } from "./store/session/session.state";
import { IdentityModule } from "./views/identity/identity.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdentityModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([SessionState], {
      developmentMode: true,
    }),
    NgxsStoragePluginModule.forRoot({
      key: "session",
    }),
  ],
  providers: [
    CanActivateTeam,
    IsActivate,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
