import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginModalComponent} from "./authentication/login-modal/login-modal.component";
import {RegisterComponent} from "./authentication/register/register.component";
import {RecipeComponent} from "./recipe/recipe.component";

const appRoutes: Routes = [

  {path: '', redirectTo: 'recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecipeComponent},
  {path: 'registration', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
