import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { HelpDeskComponent } from "./help-desk/help-desk.component";

const routes: Routes = [
  {
    path: "",
    component: HelloComponent
  },
  {
    path: "helpdesk",
    component: HelpDeskComponent,
    outlet: "help"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
