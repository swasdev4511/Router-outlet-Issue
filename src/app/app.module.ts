import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { HelpDeskComponent } from "./help-desk/help-desk.component";
import { HelloComponent } from "./hello.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, HelloComponent, HelpDeskComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
