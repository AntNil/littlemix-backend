import {NgModule} from "@angular/core";
import {RecipeComponent} from "./recipe/recipe.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginModalComponent} from "./authentication/login-modal/login-modal.component";
import {RegisterComponent} from "./authentication/register/register.component";




const appRoutes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'registration', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
