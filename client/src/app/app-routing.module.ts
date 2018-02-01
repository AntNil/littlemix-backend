import {NgModule} from "@angular/core";
import {RecipeComponent} from "./recipe/recipe.component";
import {RouterModule, Routes} from "@angular/router";
import {LoginModalComponent} from "./authentication/login-modal/login-modal.component";




const appRoutes: Routes = [

  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginModalComponent},
  {path: 'recipe', component: RecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
