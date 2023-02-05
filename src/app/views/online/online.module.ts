import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OnlineRoutingModule } from "./online-routing.module";
import { OnlineComponent } from "./online.component";




@NgModule({
imports: [CommonModule, OnlineRoutingModule],
declarations: [OnlineComponent],
})
export class OnlineModule {}