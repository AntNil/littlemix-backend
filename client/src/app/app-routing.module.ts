import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./authentication/register/register.component";
import {RecipeComponent} from "./recipe/recipe.component";
import {HomeComponent} from "./homepage/home/home.component";
import {AddRecipeComponent} from "./add-recipe/add-recipe.component";

const appRoutes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'recipe/:recipeId', component: RecipeComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'newrecipe', component: AddRecipeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
