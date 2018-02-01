import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginModalComponent} from "./authentication/login-modal/login-modal.component";

const appRoutes: Routes = [
<<<<<<< HEAD
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginModalComponent}
=======
  {path: '', redirectTo: '', pathMatch: 'full'}
>>>>>>> 5d36c2191ccf5c8d1e9d98d4602c84770bfc7fe0


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
