import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
<<<<<<< HEAD
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {RecipeComponent} from "./recipe/recipe.component";


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipe', pathMatch: 'full'},
  {path: 'recipe', component: RecipeComponent},
=======
import {LoginModalComponent} from "./authentication/login-modal/login-modal.component";

const appRoutes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginModalComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
