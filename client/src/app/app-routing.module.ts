import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginModalComponent} from "./login-modal/login-modal.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginModalComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
